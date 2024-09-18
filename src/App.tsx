import React from "react";
import Router from "./Router/Router";
import { AppTheme } from "./AppTheme";
import "./Utils/Translations";

const App: React.FC = () => (
  <AppTheme>
    <Router />
  </AppTheme>
);

export default App;
