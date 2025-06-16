"use client";

import { Grid } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { FormTextField } from "../share/component/FormTextField";

type ContactFormValues = {
  companyName: string;
  name: string;
  phoneNumber: string;
  email: string;
  inquiryContent: string;
};

export default function ContactForm() {
  const contactForm = useForm<ContactFormValues>({
    defaultValues: {
      companyName: "",
      name: "",
      phoneNumber: "",
      email: "",
      inquiryContent: "",
    },
  });

  const handleSendOnClick = () => {
    const formData = contactForm.getValues();
    console.log("送信データ:", formData);
  };

  return (
    <>
      <FormProvider {...contactForm}>
        <Grid container className="justify-center mt-32">
          <Grid className="text-center w-full">
            <h1 className="font-bold text-3xl">お問い合わせ</h1>
            <p className="text-base text-blue-400">contact</p>
            <div className="mt-2 mx-auto w-2/3 border-b border-gray-400"></div>
          </Grid>
        </Grid>
        <Grid container className="justify-center mt-8">
          <Grid className="text-center w-full">
            <p className="text-lg whitespace-pre-line sm:whitespace-normal">
              {`株式会社大谷工業では、\n電話と下記のフォームから\nお問い合わせを受け付けております。`}
            </p>
            <p className="text-lg whitespace-pre-line sm:whitespace-normal">
              {`下記に必要な情報を入力し、\n送信ボタンを押してください。`}
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          className="flex flex-col sm:flex-row justify-center mt-10"
        >
          <Grid className="flex items-center w-full sm:w-44 ml-6 sm:ml-0">
            <p>会社名</p>
          </Grid>
          <Grid className="mt-2 sm:mt-0 ml-0 sm:ml-10 w-full sm:w-auto text-center">
            <FormTextField
              name="companyName"
              variant="outlined"
              placeholder="例) 株式会社 XXXXXXX"
            />
          </Grid>
        </Grid>
        <Grid
          container
          className="flex flex-col sm:flex-row justify-center mt-4"
        >
          <Grid className="flex items-center w-full sm:w-44 ml-6 sm:ml-0">
            <p>
              氏名<span className="text-xs">(必須)</span>
            </p>
          </Grid>
          <Grid className="mt-2 sm:mt-0 ml-0 sm:ml-10 w-full sm:w-auto text-center">
            <FormTextField
              name="name"
              variant="outlined"
              placeholder="例) 山田 太郎"
              rules={{
                required: "氏名を入力してください",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          className="flex flex-col sm:flex-row justify-center mt-4"
        >
          <Grid className="flex items-center w-full sm:w-44 ml-6 sm:ml-0">
            <p>電話番号</p>
          </Grid>
          <Grid className="mt-2 sm:mt-0 ml-0 sm:ml-10 w-full sm:w-auto text-center">
            <FormTextField
              name="phoneNumber"
              variant="outlined"
              placeholder="例) 06-0000-0000"
            />
          </Grid>
        </Grid>
        <Grid
          container
          className="flex flex-col sm:flex-row justify-center mt-4"
        >
          <Grid className="flex items-center w-full sm:w-44 ml-6 sm:ml-0">
            <p>
              メールアドレス<span className="text-xs">(必須)</span>
            </p>
          </Grid>
          <Grid className="mt-2 sm:mt-0 ml-0 sm:ml-10 w-full sm:w-auto text-center">
            <FormTextField
              name="email"
              variant="outlined"
              placeholder="例) example@gmail.com"
              rules={{
                required: "メールアドレスを入力してください",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          className="flex flex-col sm:flex-row justify-center mt-4"
        >
          <Grid className="flex items-center w-full sm:w-44 ml-6 sm:ml-0">
            <p>
              お問い合わせ内容<span className="text-xs">(必須)</span>
            </p>
          </Grid>
          <Grid className="mt-2 sm:mt-0 ml-0 sm:ml-10 w-full sm:w-auto text-center">
            <FormTextField
              name="inquiryContent"
              variant="outlined"
              multiline
              rows={6}
              rules={{
                required: "お問い合わせ内容を入力してください",
              }}
            />
          </Grid>
        </Grid>
        {/* 送信ボタン */}
        <Grid container className="justify-center mt-8 mb-16">
          <Grid className="flex items-center">
            <button
              className="bg-blue-300 w-24 h-12 rounded-md"
              onClick={contactForm.handleSubmit(handleSendOnClick)}
            >
              送信
            </button>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
}
