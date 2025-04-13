import ModalAny from "@/components/comon/custom-modal/modal-any";
import { StaticAutoComplete } from "@/components/comon/input/auto-complete/static-auto-complete";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid2 as Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import {
  EmployeePositionFormValues,
  EmployeePositionSchema,
} from "../../schema/employee.schema";

interface Props {
  open: boolean;
  toggle: () => void;
  data?: any;
}

export const ModalEmployeePosition = ({ open, toggle, data }: Props) => {
  const t = useTranslations(
    "organization.org-structure.modal.employeePosition"
  );

  const employeePositionForm = useForm<EmployeePositionFormValues>({
    defaultValues: {
      employeeName: null,
      performancePeriod: "Tahun 2022",
      positionName: data?.NameAsJobTitle,
    },
    resolver: zodResolver(EmployeePositionSchema),
  });

  const { control, handleSubmit } = employeePositionForm;

  const onSubmit = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalAny
      title={t("title")}
      maxWidth="xs"
      open={open}
      toggle={toggle}
      handleSave={handleSubmit(onSubmit)}
    >
      <Grid container spacing={2}>
        <Grid size={12}>
          <CustomTextField
            label={t("form.performancePeriod")}
            control={control}
            name="performancePeriod"
            type="text"
            disabled
          />
        </Grid>
        <Grid size={12}>
          <CustomTextField
            label={t("form.positionName")}
            control={control}
            name="positionName"
            type="text"
            disabled
          />
        </Grid>
        <Grid size={12}>
          <StaticAutoComplete
            control={control}
            name="employeeName"
            required
            label={t("form.employeeName")}
            options={dataEmployee}
            getOptionLabel={(option: any) =>
              `${option.FullName} (${option.EmpBadgeNumber})`
            }
            renderOption={(props, option) => (
              <li {...props} key={option.Id}>
                {option.FullName} ({option.EmpBadgeNumber})
              </li>
            )}
          />
        </Grid>
      </Grid>
    </ModalAny>
  );
};

const dataEmployee = [
  {
    Id: 274,
    FullName: "Angga Wijaya",
    EmpBadgeNumber: "1638",
  },
  {
    Id: 275,
    FullName: "Desi Sawitri",
    EmpBadgeNumber: "0002",
  },
  {
    Id: 276,
    FullName: "Bima Abdulah",
    EmpBadgeNumber: "003",
  },
  {
    Id: 277,
    FullName: "Dendi Maulana",
    EmpBadgeNumber: "0004",
  },
  {
    Id: 278,
    FullName: "Lutfi Juna",
    EmpBadgeNumber: "1212229276",
  },
  {
    Id: 1000560,
    FullName: "Eva Susanti",
    EmpBadgeNumber: "1212238151",
  },
  {
    Id: 1000671,
    FullName: "Sandro Ardian",
    EmpBadgeNumber: "0008",
  },
  {
    Id: 1001406,
    FullName: "Andi Wirajaya",
    EmpBadgeNumber: "0307889",
  },
  {
    Id: 1001442,
    FullName: "Iwan Sumpena",
    EmpBadgeNumber: "001999",
  },
  {
    Id: 1001523,
    FullName: "Indri Astuti",
    EmpBadgeNumber: "009",
  },
  {
    Id: 1001826,
    FullName: "Jefri Junaidi",
    EmpBadgeNumber: "011",
  },
  {
    Id: 1001872,
    FullName: "Gavin Hendrawan",
    EmpBadgeNumber: "024",
  },
  {
    Id: 1003166,
    FullName: "Susi  Susanti",
    EmpBadgeNumber: "12345",
  },
];
