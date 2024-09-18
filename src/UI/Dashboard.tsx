import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const Dashboard = () => {
  const { t } = useTranslation();
  return <Button>{t("dashboard")}</Button>;
};
