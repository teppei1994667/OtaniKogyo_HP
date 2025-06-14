import { Contact } from "../component/Top/Contact";
import { Access } from "./component/Access";
import { CompanyProfileDetail } from "./component/CompanyProfileDetail";
import { CpTitle } from "./component/CpTitile";

export default function CompanyProfile() {
  return (
    <>
      <CpTitle title="会社概要" marginTopValue="32" />
      <CompanyProfileDetail />
      <CpTitle title="ACCESS" marginTopValue="12" />
      <Access />
      <Contact />
    </>
  );
}
