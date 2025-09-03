import { Grid } from "@mui/material";

export const MobileFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-100 z-10 h-24">
      <p className="text-center mt-4 text-sm text-gray-900">
        お気軽にお問い合わせください。
      </p>
      <Grid container justifyContent="center" className="h-14 mt-3">
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
