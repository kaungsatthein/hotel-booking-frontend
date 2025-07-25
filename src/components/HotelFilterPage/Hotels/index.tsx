import { getTranslations } from "next-intl/server";
import HotelsView from "./HotelsView";

const Hotels = async () => {
  const t = await getTranslations("HotelFilter");
  return (
    <div className="w-full">
      <span className="text-lg font-semibold">{t("Hotels")}</span>
      <HotelsView />
    </div>
  );
};

export default Hotels;
