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

export default function Company() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "株式会社大谷工業",
    url: "https://www.otani-company.com/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "大阪府大阪市西成区鶴見橋３丁目１−２４",
      postalCode: "557-0031",
      addressLocality: "西成区",
      addressRegion: "大阪府",
      addressCountry: "JP",
    },
    founder: {
      "@type": "Person",
      name: "谷 大介",
    },
    foundingDate: "2022-10-31",
  };
  return (
    <>
      <CpTitle title="会社概要" marginTop="mt-32" />
      <CompanyProfileDetail />
      <CpTitle title="ACCESS" marginTop="mt-12" />
      <Access />
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
