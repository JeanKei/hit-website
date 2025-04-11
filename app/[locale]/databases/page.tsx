import { useTranslations } from "next-intl";
import DataBasesTable from "@/components/DataBasesTable";

export default function DatabasesPage() {
  const t = useTranslations("DatabasesPage");
  return (
    <div className="mx-auto max-w-[90%] pt-16">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{t("title")}</h1>
      <div className="mx-auto max-w-[1000px]">
        <DataBasesTable />
      </div>
    </div>
  );
}
