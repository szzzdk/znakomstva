import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("ru");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
    console.log("Button language menu toggled");
  };

  const handleBlur = () => {
    setIsLanguageMenuOpen(false);
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
      <ul className="flex items-end justify-center fixed bottom-0 w-full">
        {listItems.map((item, index) => (
          <li className="mr-8 text-xs" key={index}>
            {t(item.key)}
          </li>
        ))}
        <div className="relative" onBlur={handleBlur} ref={ref}>
          {isLanguageMenuOpen && (
            <div  
              className="language-menu absolute flex flex-col items-center text-xs"
              style={{ left: "-1px", bottom: "20px" }}
            >
              <button onClick={() => handleLanguageChange("ru")}>
                {t("ru")}
              </button>
              <button onClick={() => handleLanguageChange("kz")}>
                {t("kz")}
              </button>
              <button onClick={() => handleLanguageChange("en")}>
                {t("en")}
              </button>
            </div>
          )}
        </div>
        <button onClick={toggleLanguageMenu} className="text-xs">
          {t(selectedLanguage)}
        </button>
      </ul>
    </div>
  );
};

export default Footer;