import { Skeleton } from "@mui/material";

export default function CategorySkeleton({ i }: { i: number }) {
  return (
    <>
      {Array(i)
        .fill(0)
        .map((item, index) => (
          <div
            key={index}
            className="border-2 cursor-pointer scale-100 hover:scale-105 duration-300 ease-in-out relative group  w-full flex items-center justify-between gap-4 overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  bg-white rounded-xl "
          >
            <div
              className={`flex flex-row gap-2 p-2 items-center justify-center h-32 `}
            >
              <Skeleton
                variant="rounded"
                width={80}
                height={80}
                animation="pulse"
              />
              <div className="flex flex-col gap-2">
                <Skeleton
                  variant="text"
                  width={150}
                  sx={{ fontSize: "1rem" }}
                />
                <Skeleton
                  variant="text"
                  width={150}
                  sx={{ fontSize: "1rem" }}
                  height={15}
                />
              </div>
              {/* <Skeleton variant="rectangular" width={210} height={40} /> */}
            </div>
          </div>
        ))}
    </>
  );
}