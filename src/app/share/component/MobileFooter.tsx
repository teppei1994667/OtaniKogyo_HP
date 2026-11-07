import { Grid } from "@mui/material";

export const MobileFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-100 z-10 h-32">
      <p className="text-center mt-3 text-sm text-gray-900">
        お気軽にお問い合わせください。
      </p>
      <p className="text-center mt-1 px-2 text-[10px] leading-tight text-gray-600 whitespace-pre-line">
        {`※営業・セールス・勧誘を目的としたお電話は固くお断りしております。\nなお、協力会社様からのお問い合わせは随時受け付けております。`}
      </p>
      <Grid container justifyContent="center" className="h-10 mt-2">
        <a
          href="tel:06-7654-9938"
          className="w-2/5 rounded-full bg-gray-100 h-8 flex items-center justify-center text-sm text-black no-underline hover:bg-gray-200 transition-colors shadow-lg"
        >
          ☎︎ 電話
        </a>
        <a
          href="/contact"
          className="w-2/5 rounded-full bg-gray-100 h-8 ml-10 flex items-center justify-center text-sm text-black no-underline hover:bg-gray-200 transition-colors shadow-lg"
        >
          ✉️ お問合せ
        </a>
      </Grid>
    </div>
  );
};
