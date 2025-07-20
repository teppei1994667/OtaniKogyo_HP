import { Metadata } from "next";
import { Contact } from "../share/topPageComponent/Contact";
import { Access } from "./component/Access";
import { CompanyProfileDetail } from "./component/CompanyProfileDetail";
import { CpTitle } from "./component/CpTitile";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "株式会社大谷工業の会社概要ページでは、会社名、所在地、代表者、創業日、建築業許可番号、業務内容、保有資格情報などを詳しくご紹介しています。大阪府大阪市を拠点に、アスベスト除去やダイオキシン対策工事を専門とする信頼の企業です。",
};

export default function CompanyProfile() {
  return (
    <>
      <CpTitle title="会社概要" marginTop="mt-32" />
      <CompanyProfileDetail />
      <CpTitle title="ACCESS" marginTop="mt-12" />
      <Access />
      <Contact />
    </>
  );
}
