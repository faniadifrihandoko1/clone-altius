import { Box, Typography } from "@mui/material";
import { PiEmpty } from "react-icons/pi";

const CustomNoRowsOverlay = () => {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingX={2}
      paddingY={3}
    >
      <PiEmpty color="disabled" size={50} style={{ marginBottom: 3 }} />
      <Typography variant="body2">Tidak ada data yang tersedia</Typography>
    </Box>
  );
};

export default CustomNoRowsOverlay;
