import { NextResponse } from "next/server";
import SibApiV3Sdk from "sib-api-v3-sdk";

type EmailPayload = {
  name: string;
  companyName?: string; // 会社名はオプション
  email: string;
  phoneNumber?: string; // 電話番号はオプション
  message: string;
};

const sendEmail = async ({
  name,
  companyName,
  email,
  phoneNumber,
  message,
}: EmailPayload) => {
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  // 環境変数からAPIキーを設定
  const apiKey = process.env.SENDINBLUE_API_KEY;
  if (!apiKey) {
    throw new Error("Sendinblue APIキーが設定されていません");
  }
  SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey = apiKey;

  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.subject = "【お問い合わせ】フォームからのメッセージ";
  sendSmtpEmail.htmlContent = `
  <p><strong>【お名前】:</strong> ${name}</p>
  <p><strong>【メールアドレス】:</strong> ${email}</p>
  <p><strong>【メッセージ】:</strong></br>${message.replace(/\n/g, "<br>")}</p>
  ${companyName ? `<p><strong>【会社名】:</strong> ${companyName}</p>` : ""}
  ${phoneNumber ? `<p><strong>【電話番号】:</strong> ${phoneNumber}</p>` : ""}
  `;
  sendSmtpEmail.sender = {
    name: process.env.SENDER_NAME,
    email: process.env.SENDER_EMAIL,
  };
  sendSmtpEmail.to = [
    { email: process.env.RECEIVER_EMAIL, name: "サイト管理者" },
  ];
  sendSmtpEmail.replyTo = { email: email, name: name };

  return await apiInstance.sendTransacEmail(sendSmtpEmail);
};

export async function POST(request: Request) {
  try {
    const body: EmailPayload = await request.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目を入力してください" },
        { status: 400 }
      );
    }

    await sendEmail(body);
    return NextResponse.json({ message: "お問い合わせを送信しました" });
  } catch (error: unknown) {
    console.error("Sendinblueでの送信エラー:", error);
    return NextResponse.json(
      { error: "メール送信中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
