import { Contact } from "../component/Top/Contact";
import { Access } from "./component/Access";
import { CompanyProfileDetail } from "./component/CompanyProfileDetail";
import { CpTitle } from "./component/CpTitile";

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
