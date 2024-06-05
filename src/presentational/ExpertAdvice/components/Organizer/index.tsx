import { Result, Treatment } from "../../../../actions/treatments.types";

export const Organizer = (data: any) => {
  console.log(data);
  if (!data) return <></>;
  return (
    <>
      {data?.data?.results?.map((tratment: Result, index: number) => {
        return <div key={index}>{tratment?.treatment?.title_pt || ""}</div>;
      })}
    </>
  );
};
