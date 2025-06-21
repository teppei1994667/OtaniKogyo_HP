import { Grid } from "@mui/material";
import { WorksType } from "../OurWorksList";

type WorkListTable = {
  title: string;
  tabelHeaderList: string[];
  bgPosition?: string;
  workListData: WorksType[];
};

export const WorkListTable = (props: WorkListTable) => {
  const { title, tabelHeaderList, bgPosition = "left", workListData } = props;
  return (
    <>
      <div className="relative mt-10">
        <Grid container className="pt-4 justify-center">
          <Grid className="">
            <h1 className="text-4xl font-bold">{title}</h1>
          </Grid>
        </Grid>
        <Grid container className="mt-6 justify-center">
          <Grid className="w-4/5 lg:w-auto">
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-900">
                <thead>
                  <tr className="bg-blue-200">
                    <th className="border border-gray-300 px-4 py-2 text-center w-144">
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
        <div
          className={`absolute top-0 ${bgPosition}-0 w-4/5 bg-blue-100 h-96 -z-10`}
        ></div>
      </div>
    </>
  );
};
