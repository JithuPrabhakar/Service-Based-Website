import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from 'react-router-dom';
import Layout from "./Layout";
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Auth from "./Auth";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
    <Routes>
        <Route path='/' element={<Auth />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
    </Routes>
    </>
  )
}

export default App;
