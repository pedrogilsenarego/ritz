import { useDispatch } from "react-redux";

import { i18n } from "../translations/i18n";
import { updateLang } from "../redux/general/actions";

const useChangeLang = () => {
  const dispatch = useDispatch();

  const changeLanguage = (lng: string) => {
    dispatch(updateLang(lng.toUpperCase()));
    i18n.changeLanguage(lng);
    setTimeout(() => {
      // window.location.reload();
    }, 200);
  };

  return {
    changeLanguage,
  };
};

export default useChangeLang;
