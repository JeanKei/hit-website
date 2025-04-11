import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="py-20">
      <div className="relative mx-auto max-w-[90rem] px-[max(env(safe-area-inset-left),1.5rem)]">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-4xl border-b  border-[#71DDBC] inline-block">
            {t("welcomeTitle")}
          </h1>
          <div className="mt-6 max-w-[42rem] text-base text-slate-600 dark:text-slate-400 lg:text-lg">
            {t("welcomeDescription")}
          </div>
          <div className="mt-6 max-w-[42rem] text-base text-slate-600 dark:text-slate-400 lg:text-lg">
            {t("datasetInfo")}
          </div>
        </div>

        <div className="mt-4 lg:mt-16">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-2xl mb-8 border-b border-[#71DDBC] inline-block">
            {t("keyFeatures")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-16">
            <div className="flex flex-col overflow-hidden border-slate-200 lg:mx-0 ">
              <div className="h-[100%] p-4 lg:p-6 bg-white">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {t("visualizationTitle")}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  {t("visualizationDescription")}
                </p>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden border-slate-200 lg:mx-0">
              <div className="h-[100%] p-4 lg:p-6  bg-white">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {t("interfaceTitle")}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  {t("interfaceDescription")}
                </p>
              </div>
            </div>

            <div className=" flex flex-col overflow-hidden border-slate-200 lg:mx-0">
              <div className="h-[100%] p-4 lg:p-6  bg-white">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {t("databaseTitle")}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  {t("databaseDescription")}
                </p>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden border-slate-200 lg:mx-0">
              <div className="h-[100%] p-4 lg:p-6  bg-white">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {t("repurposingTitle")}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  {t("repurposingDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
