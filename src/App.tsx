import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Global, ThemeProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";

import theme from "@styles/theme";
import globalStyle from "@styles/globalStyle";
import Router from "@routes/Router";

import "react-toastify/dist/ReactToastify.css";

function App() {
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
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <Global styles={globalStyle} />
      </ThemeProvider>
    </>
  );
}

export default App;
