import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <div className="absolute top-0 z-20 w-full bg-transparent print:hidden">
      <div className="nav-container-blur"></div>
      <nav className=" pl-[30px] mx-auto flex max-w-[90%] items-center justify-between pt-1 pb-1 md:pl-0">
        <ul className="flex gap-y-1 gap-x-4 flex-wrap">
          <NavigationLink href="/">{t("home")}</NavigationLink>
          <NavigationLink href="/3d-visualization">
            {t("3d-visualization")}
          </NavigationLink>
          <NavigationLink href="/databases">{t("databases")}</NavigationLink>
          <NavigationLink href="/about-project">
            {t("about-project")}
          </NavigationLink>
          <NavigationLink href="/contacts">{t("contacts")}</NavigationLink>
        </ul>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
