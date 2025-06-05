import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { AllNewsList, NewsType } from "../NewsList";

export const News = () => {
  const newsList = AllNewsList.sort(
    (prevNews, news) => news.id - prevNews.id
  ).slice(0, 3);

  return (
    <>
      <Grid container className="mt-4 justify-end">
        <Grid className="w-1/2">
          <Image
            src="/news.png"
            alt="事業内容"
            width={1512}
            height={245}
            layout="responsive"
          />
        </Grid>
      </Grid>
      <Grid container className="mt-4 justify-end">
        <Grid className="mr-5">
          <h1 className="text-2xl md:text-5xl font-bold pl-10 primary-color">
            お知らせ
          </h1>
        </Grid>
        <Grid className="mr-8">
          <Link
            href=""
            className="text-2xl md:text-5xl font-thin text-gray-400 hover:text-gray-50 transition-colors duration-300"
          >
            {`>>`}
          </Link>
        </Grid>
      </Grid>
      {newsList.map((news: NewsType, index: number) => (
        <Grid
          key={news.id}
          container
          className="items-center mt-4 mr-8 lg:mr-16 xl:mr-24 ml-8 lg:ml-16 xl:ml-24 border-b border-dashed border-gray-900"
        >
          <Grid className="ml-2 text-base xl:text-lg">
            <p>{news.date}</p>
          </Grid>
          <Grid className="ml-4 text-base xl:text-lg">
            <p>{news.title}</p>
          </Grid>
          {index === 0 ? (
            <Grid className="w-6 ml-4">
              <Image
                src="/topics.jpg"
                alt="トピックス"
                width={2241}
                height={1862}
                layout="responsive"
              />
            </Grid>
          ) : null}
        </Grid>
      ))}
    </>
  );
};
