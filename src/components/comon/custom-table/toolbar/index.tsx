"use client";

import IconifyIcon from "@/components/comon/icon";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { PiSortAscendingBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";

interface Props {
  searchValue?: string;
  handleSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleFilter?: () => void;
  disabledFilter?: boolean;
  toggleAdd?: () => void;
  addButtonLabel?: string;
  disabledAdd?: boolean;
  disabledSearch?: boolean;
  disabledDownload?: boolean;
  disableUpload?: boolean;
  filterInfo?: any;
  px?: string;
  titleAutoComplete?: string;
  selectedItem?: boolean;
  sizeButtonAdd?: "large" | "small" | "medium";
  showExport?: boolean;
  onExportExcel?: () => void;
  onExportCSV?: () => void;
  onSort?: () => void;
  onCopy?: () => void;
}

const ToolbarSectionTableCustom = ({
  searchValue,
  handleSearch,
  toggleFilter,
  disabledFilter,
  toggleAdd,
  addButtonLabel,
  disabledAdd,
  disabledSearch,
  selectedItem = false,
  showExport,
  onExportExcel,
  onExportCSV,
  filterInfo,
  sizeButtonAdd = "large",
  px = "0",
  titleAutoComplete,
  onSort,
  onCopy,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="transition-all duration-500 mt-2">
      {!selectedItem && (
        <section className={`py-3 px-${px} duration-300 transition-all`}>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              {!disabledAdd && (
                <Button
                  variant="contained"
                  size={sizeButtonAdd}
                  startIcon={<FaPlus size={12} />}
                  className={clsx(
                    "!font-semibold !text-white !rounded-md flex items-center -gap-[4px] shrink-0 min-w-max",
                    sizeButtonAdd === "medium"
                      ? "!text-[12px] !px-3 !py-[6px]"
                      : "!text-sm !px-4 !py-2",
                    sizeButtonAdd === "large" && "!text-sm !px-5 !py-3"
                  )}
                  onClick={toggleAdd}
                >
                  {addButtonLabel}
                </Button>
              )}

              {/* Tombol Sort */}
              {onSort && (
                <Tooltip title="Sort">
                  <IconButton
                    onClick={onSort}
                    className="!border !border-slate-400 !rounded-md "
                    size="small"
                  >
                    <PiSortAscendingBold size={18} />
                  </IconButton>
                </Tooltip>
              )}

              {/* Tombol Copy */}
              {onCopy && (
                <Tooltip title="Copy">
                  <IconButton
                    onClick={onCopy}
                    className="!border !border-slate-400 !rounded-md "
                    size="small"
                  >
                    <MdContentCopy size={18} />
                  </IconButton>
                </Tooltip>
              )}

              {/* Export */}
              {showExport && (
                <>
                  <Button
                    variant="outlined"
                    endIcon={<RiArrowDropDownLine />}
                    sx={{
                      fontWeight: "bold",
                      textTransform: "none",
                      borderRadius: "6px",
                      paddingX: 1.5,
                      color: "#424242",
                      fontSize: "12px",
                      border: "1px solid #424242",
                      "&:hover": { backgroundColor: "#EEEEEE" },
                    }}
                    onClick={handleClick}
                  >
                    Export
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={{ mt: 0.5 }}
                  >
                    <MenuItem
                      onClick={() => {
                        onExportExcel?.();
                        handleClose();
                      }}
                    >
                      Download .xlsx
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        onExportCSV?.();
                        handleClose();
                      }}
                    >
                      Download .csv
                    </MenuItem>
                  </Menu>
                </>
              )}

              {/* Search */}
              <div className="min-w-[350px] w-full">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="flex items-center">
                    {filterInfo && (
                      <div className="flex align-middle justify-center mr-5">
                        {filterInfo}
                      </div>
                    )}
                    <div className="relative">
                      {!disabledSearch && (
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-end w-full">
                      {!disabledSearch && (
                        <input
                          id="default-search"
                          className={`block w-full py-2 ps-10 text-sm text-gray-900 border border-slate-400 rounded-l-md focus:!outline-none focus:border-blue-500 hover:border-blue-500 ${
                            disabledFilter ? "!rounded-r-md" : ""
                          }`}
                          placeholder="Search..."
                          value={searchValue}
                          onChange={handleSearch}
                        />
                      )}

                      {!disabledFilter && (
                        <Button
                          type="submit"
                          variant="outlined"
                          size="large"
                          className={`bg-blue-700 focus:outline-none focus:ring-blue-300 !font-medium !text-sm !rounded-md !text-slate-500 !border-slate-400 hover:!text-blue-500 hover:!border-blue-500 hover:!bg-white ${
                            disabledSearch
                              ? "!rounded-l-md"
                              : "!rounded-l-none !border-l-0"
                          }`}
                          startIcon={<IconifyIcon icon="cil:filter" />}
                          onClick={toggleFilter}
                        >
                          Filter
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side (Autocomplete Title) */}
            <div className="flex gap-2 items-center">
              <Typography fontSize={14}>{titleAutoComplete}</Typography>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ToolbarSectionTableCustom;
