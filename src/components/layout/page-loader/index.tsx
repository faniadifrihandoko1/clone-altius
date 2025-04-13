// "use client";

// import { Backdrop, CircularProgress } from "@mui/material";
// import { usePathname } from "next/navigation";
// import { useEffect, useState, useTransition } from "react";

// export default function GlobalLoading() {
//   const pathname = usePathname();
//   const [isPending, startTransition] = useTransition();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     startTransition(() => {
//       setTimeout(() => setLoading(false), 1000); // Simulasi delay 1 detik
//     });
//   }, [pathname]);

//   return (
//     <Backdrop
//       open={loading || isPending}
//       sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
//     >
//       <CircularProgress color="inherit" />
//     </Backdrop>
//   );
// }
