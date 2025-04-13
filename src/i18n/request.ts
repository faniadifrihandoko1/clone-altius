import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // Daftar modul yang ingin kamu load
  const modules = [
    "general-hr",
    "scorecard-access",
    "comon",
    "organization",
    "recruitment",
    "job-profile",
  ];

  // Load seluruh file JSON dari folder messages
  const messagesArray = await Promise.all(
    modules.map(async (module) => {
      try {
        const messages = await import(
          `../../messages/${locale}/${module}.json`
        );
        return messages.default;
      } catch (error) {
        console.warn(
          `Gagal load module: ${module} untuk locale ${locale}${error}`
        );
        return {};
      }
    })
  );

  // Gabungkan semua hasil import ke satu object
  const messages = Object.assign({}, ...messagesArray);

  return {
    locale,
    messages,
  };
});
