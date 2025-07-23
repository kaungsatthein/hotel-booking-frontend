import { getTranslations } from "next-intl/server";

const Hotels = async () => {
  const t = await getTranslations("HotelFilter");
  return (
    <div className="w-full">
      <span className="text-lg font-semibold">{t("Hotels")}</span>
    </div>
  );
};

export default Hotels;
