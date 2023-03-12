import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from 'react-router-dom';
import Topbar from "./scenes/global/Topbar";
import Dashboard from './scenes/dashboard';
import Sidebar from './scenes/global/Sidebar';
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Weather from "./scenes/weather";
import News from "./scenes/news";


function Layout(props) {
  const [theme, colorMode] = useMode();

  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
              {props.component}
          </main>
        </div>
      </ThemeProvider>
      </ColorModeContext.Provider>
      </>
  );
}

export default Layout;
