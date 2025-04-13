import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { ThemeWrapper } from "@/components/layout/theme-wraper";
import "./globals.css"; // Custom CSS harus terakhir
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
          <ThemeWrapper>{children}</ThemeWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
