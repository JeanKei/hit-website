import { Table } from "@/components/ui/table";
import tableData from "@/data/databases-table/databases-table.json"; // Путь к вашему JSON файлу
import { useTranslations } from "next-intl";

const DataBasesTable: React.FC = () => {
  const { pairs } = tableData;
  const t = useTranslations("DatabasesPage");

  return (
    <div className="overflow-x-auto max-w-[1000px] mx-auto">
      {pairs.map((pair, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl text-gray-800 mb-4">
            {t("sub-title")}: {pair.title}
          </h3>

          {pair.table1 && pair.table1.length > 0 && (
            <Table className="min-w-full table-auto border-separate border-spacing-0 mb-6">
              <thead>
                <tr className="bg-[#71DDBC] text-left">
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    Data Source
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    Nodes
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    Relations (Triplets)
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700 text-right">
                    Data Releases
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pair.table1.map((data, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {data.dataSource}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {data.nodes}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {data.triplets}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right">
                      {data.dataRelease}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

          {pair.interactions && pair.interactions.length > 0 && (
            <Table className="min-w-full table-auto border-separate border-spacing-0">
              <thead>
                <tr className="bg-[#71DDBC] text-left">
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    Interaction
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    Relation Type
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700 text-right">
                    #Triplets
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pair.interactions.map((interaction, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {interaction.type}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {interaction.relation}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right">
                      {interaction.triplets}
                    </td>
                  </tr>
                ))}
                {/* Итоговая строка */}
                <tr className="bg-gray-100 font-bold">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    Total triplets
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900"></td>
                  <td className="px-6 py-4 text-sm text-gray-900 text-right">
                    {pair.interactions
                      .reduce(
                        (total, item) =>
                          total +
                          parseInt(item.triplets.replace(/[^0-9]/g, "")),
                        0
                      )
                      .toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </Table>
          )}
        </div>
      ))}
    </div>
  );
};

export default DataBasesTable;
