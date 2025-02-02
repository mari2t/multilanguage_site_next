import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("message", { name: "Jane" })}</p>
      <p>{t("followers", { count: 3580 })} </p>
      <p>{t("gender", { gender: "female" })}</p>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
