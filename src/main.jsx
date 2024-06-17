import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import App from "./App.jsx";
import "inter-ui/inter.css";
import "./index.css";

const Main = () => {
  const [themeType, setThemeType] = useState("dark");

  const switchThemes = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
  };

  return (
    <React.StrictMode>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <App onSwitchThemesClick={switchThemes} />
      </GeistProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
