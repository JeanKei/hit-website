import { useTranslations } from "next-intl";
import AboutProjectTable from "@/components/AboutProjectTable";

export default function AboutProjectPage() {
  const t = useTranslations("AboutProjectPage");
  return (
    <div className="mx-auto max-w-[90%] pt-16">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{t("title")}</h1>
      <div className="mx-auto max-w-[1000px]">
        <AboutProjectTable />
      </div>
    </div>
  );
}
