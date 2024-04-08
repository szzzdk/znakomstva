import { useState } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("ru");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
    console.log("Button language menu toggled");
  };

  const listItems = [
    {
      path: "/",
      key: "aboutUs",
    },
    {
      path: "/",
      key: "support",
    },
    {
      path: "/",
      key: "recommendations",
    },
    {
      path: "/",
      key: "contacts",
    },
    {
      path: "/",
      key: "paymentRules",
    },
  ];

  return (
    <div>
      <ul className="flex items-center justify-center fixed bottom-0 w-full">
        {listItems.map((item, index) => (
          <li className="mr-8" key={index}>{t(item.key)}</li>
        ))}
        <li>
          <button onClick={toggleLanguageMenu}>{t(selectedLanguage)}</button>
        </li>
      </ul>
      {isLanguageMenuOpen && (
        <div>
          <button onClick={() => handleLanguageChange("ru")}>{t("ru")}</button>
          <button onClick={() => handleLanguageChange("kz")}>{t("kz")}</button>
          <button onClick={() => handleLanguageChange("en")}>{t("en")}</button>
        </div>
      )}
    </div>
  );
};

export default Footer;
