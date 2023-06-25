import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Global, ThemeProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";

import styleConfig from "@configs/style.config";
import Router from "@routes/router";

import "react-toastify/dist/ReactToastify.css";
import "react-calendar/dist/Calendar.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import themeConfigs from "@configs/theme.config";

function App() {
  console.log(themeConfigs.custom({ mode: "dark" }));

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
      <ThemeProvider theme={themeConfigs.custom({ mode: "light" })}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <Global styles={styleConfig.globalStyle} />
      </ThemeProvider>
    </>
  );
}

export default App;
