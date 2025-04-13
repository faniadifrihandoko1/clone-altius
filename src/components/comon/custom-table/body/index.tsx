"use client";

import { Box, Collapse, IconButton, Tooltip, Typography } from "@mui/material";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface Props {
  children: React.ReactNode;
  title: string;
  backUrl?: any;
  recordsTotal?: number;
  showToggle?: boolean;
  classNameCard?: string;
  classNameTitle?: string;
  classNameSubCard?: string;
  showButton?: boolean;
  buttonElement?: React.ReactNode;
}

const CardBodyCustom = ({
  children,
  title,
  backUrl,
  showToggle,
  classNameCard,
  classNameSubCard,
  classNameTitle,
  showButton,
  buttonElement,
}: Props) => {
  const [open, setOpen] = useState<boolean>(true);
  const router = useRouter();
  const handleBack = () => {
    router.push(backUrl);
  };

  return (
    <main
      className={clsx(
        "w-full overflow-auto min-h-full bg-white rounded-[5px] p-5",
        classNameCard ?? "drop-shadow-md"
      )}
    >
      {/* Header */}
      <div
        className={clsx(
          "flex gap-3 justify-between items-center border-b-[1px] border-slate-300 pb-2",
          classNameSubCard
        )}
      >
        <div className="flex gap-3 items-center">
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
            <h1
              className={clsx(
                "font-semibold text-lg cursor-default",
                classNameTitle
              )}
            >
              {title}
            </h1>
          </div>
        </div>

        {showToggle && (
          <div>
            <IconButton onClick={() => setOpen(!open)} color="primary">
              {open ? (
                <MdKeyboardArrowUp size={24} />
              ) : (
                <MdKeyboardArrowDown size={24} />
              )}
            </IconButton>
          </div>
        )}
      </div>

      {/* Body content */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>

      {/* Action Button */}
      {showButton && buttonElement && (
        <div className="flex justify-end mt-5">{buttonElement}</div>
      )}
    </main>
  );
};

export default CardBodyCustom;
