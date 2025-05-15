import { useLocation } from "react-router-dom";

export const UrlInfo = () => {
  const urlInfo = useLocation();

  const location = urlInfo.pathname.split("/").slice(1)[1];

  return location;
};
