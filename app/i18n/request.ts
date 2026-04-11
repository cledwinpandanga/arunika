import { getRequestConfig } from "next-intl/server";

const locales = ["en", "id"];

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = locales.includes(requested || "") ? requested! : "id";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
