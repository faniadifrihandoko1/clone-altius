"use client";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useTranslations } from "next-intl";
import EntriesText from "../pagination/entries-text";
import PaginationMui from "../pagination/pagination-mui";

interface Props {
  page: number;
  pageSize: number;
  recordsFiltered: number;
  handleLimitChange: (e: SelectChangeEvent) => void;
  handlePageChange: (event: any, newPage: number) => void;
}

const PaginationSectionTableCustom = ({
  page,
  pageSize,
  recordsFiltered,
  handleLimitChange,
  handlePageChange,
}: Props) => {
  const t = useTranslations("comon.pagination");
  return (
    <>
      {recordsFiltered ? (
        <section className="w-full mt-[5px] bg-white  pb-3 rounded-md px-1">
          <div className="flex justify-between gap-5 items-center py-[5px]">
            <div className="flex flex-1 gap-5 items-center !text-slate-700">
              <EntriesText
                currentPage={page}
                pageSize={pageSize}
                totalEntries={recordsFiltered || 0}
              />
            </div>
            <div>
              <div className="flex gap-5 items-center">
                <div className="flex gap-3 items-center">
                  <p className="text-nowrap text-[12px]">{t("limit")}: </p>
                  <FormControl
                    fullWidth
                    size="small"
                    sx={{
                      minWidth: "50px",
                      "& .MuiSelect-root": {
                        // padding: "2px 8px",
                        maxHeight: "28px",
                        fontSize: "0.75rem",
                      },
                    }}
                  >
                    <Select
                      value={pageSize.toString()}
                      onChange={handleLimitChange}
                      size="small"
                    >
                      <MenuItem value="5">5</MenuItem>
                      <MenuItem value="10">10</MenuItem>
                      <MenuItem value="25">25</MenuItem>
                      <MenuItem value="50">50</MenuItem>
                      <MenuItem value="100">100</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <PaginationMui
                  total={recordsFiltered || 0}
                  page={page}
                  pageSize={pageSize}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default PaginationSectionTableCustom;
