import React, { useContext} from "react";
import { LanguageContext } from "../../context/languageContext";

export default function ChangeLang() {
    const { contextLanguage, setContextLanguage } = useContext(LanguageContext);
    return (
        <div className="w-25 d-flex flex-column  align-items-center">
            <button
                className="btn btn-warning text-center"
                onClick={() =>
                    setContextLanguage(contextLanguage === "ar" ? "en-US" : "ar")
                }
            >
                Change Language
            </button>
        </div>
    );
}