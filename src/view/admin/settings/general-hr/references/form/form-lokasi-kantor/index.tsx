"use client";
import { CustomTextField } from "@/components/comon/input/text-field/text-field";
import MapPicker from "@/components/comon/map-picker";
import { Grid2 as Grid, Typography } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { LokasiKantorFormValues } from "../../schema/schema-lokasi-kantor";

interface Props {
  form: UseFormReturn<LokasiKantorFormValues>;
  readOnly?: boolean;
  for_edit?: boolean;
}

const FormLokasiKantor = ({ form }: Props) => {
  const { control, setValue, watch } = form;

  const latitude = watch("latitude");
  const longitude = watch("longitude");

  console.log(latitude, longitude);

  const handleLocationChange = (lat: number, lng: number) => {
    setValue("latitude", lat);
    setValue("longitude", lng);
  };

  return (
    <>
      <Grid container spacing={1.5}>
        <Grid size={12}>
          <CustomTextField
            label="Nama"
            required
            control={control}
            name="name"
            type="text"
          />
        </Grid>
        <Grid size={6}>
          <CustomTextField
            label="Jarak radius untuk absen (meter)"
            required
            control={control}
            name="jarak"
            type="number"
          />
        </Grid>
        <Grid size={6}>
          <CustomTextField
            label="Timezone"
            required
            control={control}
            name="timezone"
            type="number"
          />
        </Grid>
        <Grid size={6}>
          <Typography fontWeight={600}>
            Latitude : <span style={{ fontWeight: 500 }}>{latitude}</span>
          </Typography>
        </Grid>
        <Grid size={6}>
          <Typography fontWeight={600}>
            Longitude : <span style={{ fontWeight: 500 }}>{longitude}</span>
          </Typography>
        </Grid>

        <Grid size={12}>
          <MapPicker
            onChange={handleLocationChange}
            markerLabel=""
            zoom={15}
            enableAutoLocation={true}
            mapContainerStyle={{
              height: "300px",
              width: "100%",
              borderRadius: "8px",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormLokasiKantor;
