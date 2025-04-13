"use client";
import { ModalAdd } from "@/components/comon/custom-modal";
import { StaticAutoComplete } from "@/components/comon/input/auto-complete/static-auto-complete";
import { CustomDatePicker } from "@/components/comon/input/date-picker/custom-date-picker";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { Divider, Grid2 as Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import {
  jobRequestFormValues,
  jobRequestSchemas,
} from "../../schema/create.schema";

interface Props {
  open: boolean;
  toggle: () => void;
}
const ModalAddNestedJobRequest = ({ open, toggle }: Props) => {
  const t = useTranslations("recruitment.job-request");
  const addJobRequestForm = useForm<jobRequestFormValues>({
    defaultValues: {
      candidatEmployee: null,
      identity: null,
      address: "",
      departemen: null,
      forNeeds: null,
      interviewer: null,
      interviewDate: null,
      interviewTo: null,
      noteInterview: null,
    },
    resolver: zodResolver(jobRequestSchemas),
  });

  const { control, setValue } = addJobRequestForm;

  return (
    <ModalAdd
      title={t("create.title")}
      maxWidth="sm"
      open={open}
      toggle={toggle}
      handleSave={() => {}}
    >
      <Grid container spacing={2}>
        <Grid size={6}>
          <StaticAutoComplete
            control={control}
            name="candidatEmployee"
            label={t("form.candidatEmployee")}
            options={dataCandidat}
            getOptionKey={(option: any) => option?.Id}
            getOptionLabel={(option: any) => option?.FullName}
            onValueChange={(_, newValue: any) => {
              setValue("identity", newValue ? newValue.IdentityNumber : null);
            }}
          />
        </Grid>
        <Grid size={6}>
          <CustomTextField
            control={control}
            name="identity"
            label={t("form.identity")}
            disabled
          />
        </Grid>
        <Grid size={12}>
          <CustomTextField
            control={control}
            name="address"
            label={t("form.address")}
            multiline
            disabled
            rows={2}
          />
        </Grid>
        <Grid size={12} sx={{ my: 1 }}>
          <Divider />
        </Grid>
        <Grid size={6}>
          <CustomTextField
            control={control}
            name="forNeeds"
            label={t("form.forNeeds")}
            disabled
          />
        </Grid>
        <Grid size={6}>
          <CustomTextField
            control={control}
            name="departemen"
            label={t("form.departemen")}
            disabled
          />
        </Grid>
        <Grid size={6}>
          <StaticAutoComplete
            control={control}
            name="interviewer"
            label={t("form.interviewer")}
            options={dataInterviewer}
            getOptionKey={(option: any) => option?.Id}
            getOptionLabel={(option: any) => option?.FullName}
          />
        </Grid>
        <Grid size={6}>
          <CustomDatePicker
            label={t("form.interviewDate")}
            control={control}
            name="interviewDate"
          />
        </Grid>
        <Grid size={12}>
          <StaticAutoComplete
            control={control}
            name="interviewTo"
            label={t("form.interviewTo")}
            options={dataInterviewTo}
            getOptionKey={(option: any) => option?.Id}
            getOptionLabel={(option: any) => option?.Name}
          />
        </Grid>
        <Grid size={12}>
          <CustomTextField
            control={control}
            name="noteInterview"
            label={t("form.noteInterview")}
            disabled
            multiline
            rows={2}
          />
        </Grid>
      </Grid>
    </ModalAdd>
  );
};

export default ModalAddNestedJobRequest;

const dataCandidat = [
  {
    Id: 3,
    FullName: "Maya Melina",
    IdentityNumber: "65654444567674",
    JobName: "Designer #1",
    ProspectiveEmployeeStatusName: "Dalam proses wawancara",
    ProspectiveEmployeeStatusId: 1,
    disc: null,
    mpt: null,
    cfit: null,
    toefl: null,
  },
  {
    Id: 7,
    FullName: "Tri Cahyana",
    IdentityNumber: "65654444567673",
    JobName: "IT Security #1",
    ProspectiveEmployeeStatusName: "Dalam proses wawancara",
    ProspectiveEmployeeStatusId: 1,
    disc: null,
    mpt: null,
    cfit: null,
    toefl: null,
  },
  {
    Id: 8,
    FullName: "Iwan Sumpena",
    IdentityNumber: "6565444456454",
    JobName: "Relationship Manager",
    ProspectiveEmployeeStatusName: "Siap di wawancara",
    ProspectiveEmployeeStatusId: 0,
    disc: null,
    mpt: null,
    cfit: null,
    toefl: null,
  },
  {
    Id: 9,
    FullName: "Shella Fachrizal",
    IdentityNumber: "65654444567679",
    JobName: "Relationship Manager",
    ProspectiveEmployeeStatusName: "Siap di wawancara",
    ProspectiveEmployeeStatusId: 0,
    disc: null,
    mpt: null,
    cfit: null,
    toefl: null,
  },
];

const dataInterviewer = [
  {
    Id: 3,
    FullName: "Maya Melina",
    IdentityNumber: "65654444567674",
    JobName: "Designer #1",
    ProspectiveEmployeeStatusName: "Dalam proses wawancara",
    ProspectiveEmployeeStatusId: 1,
    disc: null,
    mpt: null,
    cfit: null,
    toefl: null,
  },
  {
    Id: 7,
    FullName: "Tri Cahyana",
    IdentityNumber: "65654444567673",
    JobName: "IT Security #1",
    ProspectiveEmployeeStatusName: "Dalam proses wawancara",
    ProspectiveEmployeeStatusId: 1,
    disc: null,
    mpt: null,
    cfit: null,
    toefl: null,
  },
  {
    Id: 8,
    FullName: "Iwan Sumpena",
    IdentityNumber: "6565444456454",
    JobName: "Relationship Manager",
    ProspectiveEmployeeStatusName: "Siap di wawancara",
    ProspectiveEmployeeStatusId: 0,
    disc: null,
    mpt: null,
    cfit: null,
    toefl: null,
  },
  {
    Id: 9,
    FullName: "Shella Fachrizal",
    IdentityNumber: "65654444567679",
    JobName: "Relationship Manager",
    ProspectiveEmployeeStatusName: "Siap di wawancara",
    ProspectiveEmployeeStatusId: 0,
    disc: null,
    mpt: null,
    cfit: null,
    toefl: null,
  },
];

const dataInterviewTo = [
  {
    Id: 0,
    Name: "Wawancara Ke 1",
    Description: null,
    DetailPeriod: null,
    IconPath: null,
  },
  {
    Id: 1,
    Name: "Wawancara Ke 2",
    Description: null,
    DetailPeriod: null,
    IconPath: null,
  },
  {
    Id: 2,
    Name: "Wawancara Ke 3",
    Description: null,
    DetailPeriod: null,
    IconPath: null,
  },
  {
    Id: 3,
    Name: "Wawancara Ke 4",
    Description: null,
    DetailPeriod: null,
    IconPath: null,
  },
  {
    Id: 4,
    Name: "Wawancara Ke 5",
    Description: null,
    DetailPeriod: null,
    IconPath: null,
  },
];
