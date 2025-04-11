import { Inter } from "next/font/google";
import {
  NextIntlClientProvider,
  Locale,
  hasLocale,
  useTranslations,
} from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navigation from "@/components/Navigation";
import "./globals.css";
import { getTranslations } from "next-intl/server";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations("MainLayout");

  return (
    <html lang={locale}>
      <head>
        <title>{t("title")}</title>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
