"use client";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { BsArrowLeftRight } from "react-icons/bs";

interface Props {
  title: string;
  backUrl?: any;
  recordsTotal?: number;
}

const HeaderSectionTableCustom = ({ title, backUrl, recordsTotal }: Props) => {
  const router = useRouter();

  const handleBack = () => {
    router.push(backUrl);
  };

  return (
    <>
      {/* <section className='p-5 pb-0'> */}
      <div className="flex gap-3 items-center border-b-[1px] border-slate-300 pb-4">
        {backUrl && (
          <Tooltip
            title={<Typography sx={{ color: "white" }}>Kembali</Typography>}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <IconButton
                color="primary"
                onClick={handleBack}
                sx={{ border: 1 }}
              >
                <BsArrowLeftRight />
              </IconButton>
            </Box>
          </Tooltip>
        )}

        {backUrl && <div className="h-[30px] w-[2px] bg-slate-500"></div>}

        <div>
          <h1 className="font-semibold text-lg cursor-default">
            {title}
            {recordsTotal !== undefined && recordsTotal > 0 && (
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-600 rounded-md">
                {recordsTotal}
              </span>
            )}
          </h1>
        </div>
      </div>
      {/* </section> */}
    </>
  );
};

export default HeaderSectionTableCustom;
