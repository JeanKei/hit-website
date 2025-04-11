import React, { useState } from "react";
import { relationType } from "@/data/graph/relationType";
import { interaction } from "@/data/graph/interaction";
import { base } from "@/data/graph/base";
import { useTranslations } from "next-intl";

interface MenuProps {
  updateLimit: (limit: number) => void;
  updateQuery: (query: string) => void;
}

const Menu: React.FC<MenuProps> = ({ updateLimit, updateQuery }) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [limitValue, setLimitValue] = useState<number>(100);
  const [selectedQuery, setSelectedQuery] = useState<string | null>(null);

  const handleQuerySelect = (queryName: string, query: string) => {
    updateQuery(query);
    setSelectedQuery(queryName);
  };

  const t = useTranslations("Graph");

  return (
    <div className="relative">
      <div
        className="absolute top-[16px] left-[10px] cursor-pointer z-20 flex flex-col gap-1"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <div
          className={`w-[25px] h-[2px] bg-[#696969] transition-transform duration-300 ${
            isMenuOpen
              ? "rotate-[-45deg] translate-x-[-4px] translate-y-[6px]"
              : ""
          }`}
        />
        <div
          className={`w-[25px] h-[2px] bg-[#696969] transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-[25px] h-[2px] bg-[#696969] transition-transform duration-300 ${
            isMenuOpen
              ? "rotate-[45deg] translate-x-[-4px] translate-y-[-6px]"
              : ""
          }`}
        />
      </div>

      <div
        className={`fixed top-0 left-0 w-1/2 h-screen bg-gray-700/40 bg-opacity-10 backdrop-blur-md transform md:w-1/4 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-10`}
      >
        <div className="pl-2 pr-2 pb-5 space-y-4">
          <div className="flex items-center justify-between gap-3 pt-16">
            <label className="text-white text-sm font-semibold whitespace-nowrap">
              {t("limitLabel")}
            </label>
            <input
              type="number"
              value={limitValue}
              onChange={(e) => setLimitValue(Number(e.target.value))}
              className="p-[8px] w-[100%] text-sm rounded bg-gray-200 focus:outline-none"
            />
            <button
              onClick={() => updateLimit(limitValue)}
              className="p-[8px] rounded bg-[#71DDBC] text-white text-sm font-semibold cursor-pointer whitespace-nowrap"
            >
              {t("submitButton")}
            </button>
          </div>

          {[
            { title: t("relationType"), data: relationType },
            { title: t("interaction"), data: interaction },
            { title: t("dataSources"), data: base },
          ].map(({ title, data }) => (
            <div key={title}>
              <label className="block text-white text-sm font-semibold mb-2">
                {title}
              </label>
              <div className="max-h-40 overflow-y-auto bg-gray-400/40 p-2 rounded">
                {data.map(({ name, query }) => (
                  <div
                    key={name}
                    onClick={() => handleQuerySelect(name, query)}
                    className={`p-2 cursor-pointer rounded transition break-words text-sm ${
                      selectedQuery === name
                        ? "bg-[#71DDBC] text-white"
                        : "hover:bg-gray-400"
                    }`}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
