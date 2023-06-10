import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Global, ThemeProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";

import theme from "@styles/theme";
import globalStyle from "@styles/globalStyle";
import MainLayout from "@components/layout/MainLayout";
import routes from "@routes/router";
import PageWrapper from "@components/PageWrapper";

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
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {routes.map((route, index) =>
                route.index ? (
                  <Route
                    index
                    key={index}
                    element={
                      route.state ? (
                        <PageWrapper state={route.state}>
                          {route.element}
                        </PageWrapper>
                      ) : (
                        route.element
                      )
                    }
                  />
                ) : (
                  <Route
                    path={route.path}
                    key={index}
                    element={
                      route.state ? (
                        <PageWrapper state={route.state}>
                          {route.element}
                        </PageWrapper>
                      ) : (
                        route.element
                      )
                    }
                  />
                )
              )}
            </Route>
          </Routes>
        </BrowserRouter>
        <Global styles={globalStyle} />
      </ThemeProvider>
    </>
  );
}

export default App;
