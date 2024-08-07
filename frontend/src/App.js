import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./shared/themes";
import { MenuLateral } from "./shared/components/Menu_Lateral/MenuLateral";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
    <BrowserRouter>

      <MenuLateral>
        <AppRoutes />
      </MenuLateral>

    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
