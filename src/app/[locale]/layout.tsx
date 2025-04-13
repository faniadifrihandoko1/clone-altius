// src/app/[locale]/layout.tsx
import { LayoutDashboard } from "@/components/layout";
import { ThemeWrapper } from "@/components/layout/theme-wraper";
import { Box } from "@mui/material";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeWrapper>
            <Box
              sx={{
                display: "flex",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
              }}
            >
              {/* <ClientLayoutWrapper>{children}</ClientLayoutWrapper> */}
              <LayoutDashboard>{children}</LayoutDashboard>
            </Box>
          </ThemeWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
