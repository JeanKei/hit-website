import { useTranslations } from "next-intl";

export default function ContactsPage() {
  const t = useTranslations("ContactsPage");

  return (
    <div className="mx-auto max-w-[90%] pt-16">
      <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>

      <ul className="bg-[#71DDBC] p-4 rounded-lg max-w-[500px]">
        <li className="pb-1">
          <strong>{t("university-title")}:</strong> {t("university")}
        </li>
        <li className="pb-1">
          <strong>{t("address-title")}:</strong> {t("address")}
        </li>
        <li className="pb-1">
          <strong>{t("faculty-title")}:</strong> {t("faculty")}
        </li>
        <li className="pb-1">
          <strong>{t("department-title")}:</strong> {t("department")}
        </li>
        <li className="pb-1">
          <strong>{t("laboratory-title")}:</strong> {t("laboratory")}
        </li>
      </ul>
    </div>
  );
}
