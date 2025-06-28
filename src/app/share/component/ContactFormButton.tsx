"use client";

import { useRouter } from "next/navigation";

export const ContactFormButton = () => {
  const router = useRouter();
  const handleContactFormOnClick = () => {
    router.push("/contact");
  };
  return (
    <button
      onClick={handleContactFormOnClick}
      className="text-xs lg:text-base bg-white border border-black p-3 md:p-5 lg:p-6 hover:bg-gray-200 transition-colors duration-300"
    >
      {`お問い合わせフォーム  >`}
    </button>
  );
};
