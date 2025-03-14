import { AssistantDirectionOutlined, Close } from "@mui/icons-material";
import { Avatar, Container, Drawer } from "@mui/material";
import { useAppContext } from "contexts";
import { useSWRAPI } from "hooks";
import { adminManageCategoryContent } from "locale";
import { useRouter } from "next/router";

type Props = {
  open?: boolean;
  onClose: any;
  setOpenResponseDrawer: any;
  activeData?: any;
};

const ResponseDrawer = ({ open, onClose, setOpenResponseDrawer }: any) => {
  const router = useRouter();
  const { data } = useSWRAPI(
    `admin-dashboard/all-response-data?quizId=${router?.query?.quizzeId}`
  );
  const { selectedLanguage } = useAppContext();
  return (
    <div>
      <div
        className="flex items-center gap-1 border border-primary bg-primary/10 text-primary px-3 py-1 rounded-md cursor-pointer"
        onClick={setOpenResponseDrawer(true)}
      >
        <p className="text-lg font-medium">
          <span className="text-red-700">{data?.data?.data?.data?.length}</span>{" "}
          {adminManageCategoryContent(selectedLanguage).response}
        </p>
      </div>

      <Drawer anchor="right" open={open} onClose={() => onClose && onClose()}>
        <Container
          style={{
            width: "lg",
            marginTop: "3vh",
          }}
        >
          <aside className="w-full flex items-center">
            <div
              className="basis-[20%] cursor-pointer"
              onClick={() => onClose && onClose()}
            >
              <Close className="text-3xl" />
            </div>
            <div className="basis-[80%] text-center mr-20">
              <h1 className="text-3xl font-bold text-primary">
                {adminManageCategoryContent(selectedLanguage).allresposnse}
              </h1>
            </div>
          </aside>
          <aside className="mt-7 max-h-[90vh] overflow-y-scroll">
            {data?.data?.data?.data?.length === 0 ? (
              <p className="text-center font-semibold min-w-[20rem]">
                No Response Yet!
              </p>
            ) : (
              data?.data?.data?.data?.map((item: any, index: number) => (
                <>
                  <div
                    className="flex flex-row items-center gap-3 p-2 min-w-[20rem]"
                    key={index}
                  >
                    <div className="relative">
                      <Avatar
                        // src={item?.presentStudent?.profileUrl || PROFILE.src}
                        alt="student"
                        imgProps={{
                          loading: "lazy",
                        }}
                        className="shadow-lg bg-green-600/10 p-1 rounded-full h-14 w-14"
                      ></Avatar>
                    </div>
                    <div className="">
                      <h3 className="font-semibold tracking-wide text-md">
                        {item?.name}
                      </h3>
                      <h3 className="font-normal text-gray-600 tracking-wide text-sm">
                        {item?.email}
                      </h3>
                    </div>
                  </div>
                </>
              ))
            )}
          </aside>
        </Container>
      </Drawer>
    </div>
  );
};

export default ResponseDrawer;
