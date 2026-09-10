import { NavLink } from "react-router-dom";
import { translations } from "../../i18n/translations.js";
import "./Header.css";

const languages = [
  { code: "ca", label: "CA", name: "Català" },
  { code: "es", label: "ES", name: "Castellano" },
  { code: "el", label: "ΕΛ", name: "Ελληνικά" },
];

export default function Header({ currentLanguage, setCurrentLanguage }) {
  const text = translations[currentLanguage];

  return (
    <header className="header" lang={currentLanguage}>
      <div className="header__inner">
        <div className="header__ornament" aria-hidden="true">
          <span className="header__leaves" />
        </div>
        <p className="header__names">
          <NavLink to="/" end>
            Eleanna &amp; Marc
          </NavLink>
        </p>
        <p className="header__date">
          <time dateTime="2027-08-28">28 · 08 · 2027</time>
        </p>
        <p className="header__location" aria-live="polite" aria-atomic="true">
          {text.location}
        </p>
        <div
          className="header__languages"
          role="group"
          aria-label={text.languageSelector}
        >
          {languages.map(({ code, label, name }) => (
            <button
              key={code}
              type="button"
              lang={code}
              aria-label={name}
              aria-pressed={currentLanguage === code}
              onClick={() => setCurrentLanguage(code)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
