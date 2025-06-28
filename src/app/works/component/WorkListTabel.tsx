"use client";

import { Grid } from "@mui/material";
import { WorksType } from "../OurWorksList";
import { useEffect, useState } from "react";

type WorkListTable = {
  title: string;
  tabelHeaderList: string[];
  workListData: WorksType[];
};

export const WorkListTable = (props: WorkListTable) => {
  const { title, tabelHeaderList, workListData } = props;
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="relative mt-10">
        <Grid container className="pt-4 justify-center">
          <Grid className="">
            <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
          </Grid>
        </Grid>
        {windowWidth > 768 ? (
          <Grid container className="mt-6 justify-center">
            <Grid className="w-4/5 w-auto">
              <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-900">
                  <thead>
                    <tr className="bg-blue-400">
                      <th className="border border-gray-300 px-4 py-2 text-center w-160">
                        {tabelHeaderList[0]}
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-center w-48">
                        {tabelHeaderList[1]}
                      </th>
                      {tabelHeaderList[2] ? (
                        <th className="border border-gray-300 px-4 py-2 text-center w-48">
                          {tabelHeaderList[2]}
                        </th>
                      ) : null}
                      {tabelHeaderList[3] ? (
                        <th className="border border-gray-300 px-4 py-2 text-center w-36">
                          {tabelHeaderList[3]}
                        </th>
                      ) : null}
                    </tr>
                  </thead>
                  <tbody>
                    {workListData.map((AsbestosWork: WorksType) => (
                      <tr key={AsbestosWork.id} className="bg-white">
                        <td className="border border-gray-300 px-4 py-2">
                          {AsbestosWork.FieldName}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {AsbestosWork.Location}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {AsbestosWork.Option1}
                        </td>
                        {tabelHeaderList[3] ? (
                          <td className="border border-gray-300 px-4 py-2">
                            {AsbestosWork.Option2 ? AsbestosWork.Option2 : null}
                          </td>
                        ) : null}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Grid>
          </Grid>
        ) : (
          <>
            {workListData.map((AsbestosWork: WorksType) => (
              <div key={AsbestosWork.id}>
                <Grid container className="justify-center w-full mt-6">
                  <Grid className="w-11/12 text-center">
                    <h1 className="text-base font-bold bg-blue-400 py-2">
                      {AsbestosWork.FieldName}
                    </h1>
                  </Grid>
                </Grid>
                <Grid container className="justify-center w-full">
                  <Grid className="w-11/12 border-b border-gray-300">
                    <Grid container className="bg-white">
                      <Grid className="w-24 text-center">
                        <h2 className="text-base font-bold  py-2 text-blue-300">
                          {AsbestosWork.Location ? tabelHeaderList[1] : ""}
                        </h2>
                      </Grid>
                      <Grid>
                        <h2 className="text-base py-2">
                          {AsbestosWork.Location}
                        </h2>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className="justify-center w-full">
                  <Grid className="w-11/12 border-b border-gray-300">
                    <Grid container className="bg-white">
                      <Grid className="w-24 text-center">
                        <h2 className="text-base font-bold  py-2 text-blue-300">
                          {AsbestosWork.Option1 ? tabelHeaderList[2] : ""}
                        </h2>
                      </Grid>
                      <Grid className="">
                        <h2 className="text-base py-2">
                          {AsbestosWork.Option1}
                        </h2>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            ))}
          </>
        )}
        <div
          className={`absolute top-0 left-0 w-4/5 bg-blue-100 h-144 -z-10`}
        ></div>
      </div>
    </>
  );
};
