import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "@styles/theme";
import globalStyle from "@styles/globalStyle";
import Home from "@pages/Home/Page";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
        <Global styles={globalStyle} />
      </ThemeProvider>
    </>
  );
}

export default App;
