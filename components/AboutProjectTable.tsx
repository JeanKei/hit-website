import { Table } from "@/components/ui/table";
import { useTranslations } from "next-intl";

const AboutProjectTable: React.FC = () => {
  const t = useTranslations("AboutProjectPage");

  return (
    <div className="overflow-x-auto max-w-[1000px] mx-auto flex flex-col gap-10">
      <div>
        <h3 className="text-xl text-gray-800 mb-4">{t("table-1-title")}</h3>
        <Table className="min-w-full table-auto border-separate border-spacing-0">
          <thead>
            <tr className="bg-[#71DDBC] text-left">
              <th className="px-6 py-4 text-sm font-medium text-gray-700">
                {t("category")}
              </th>
              <th className="px-6 py-4 text-sm font-medium text-gray-700">
                {t("tool")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">
                {t("table-1-language")}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">JavaScript</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">
                {t("table-1-language")}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">TypeScript</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">
                {t("table-2-language")}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">Python</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">
                {t("table-1-framework")}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">React</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">
                {t("table-1-framework")}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">Next.js</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">
                {t("table-2-library")}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">PyKEEN</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">
                {t("table-1-base")}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">Neo4j</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">
                {t("table-1-graph")}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                3D Force-Directed Graph
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AboutProjectTable;
