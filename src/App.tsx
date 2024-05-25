import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import CookiePolicy from "./components/CookiePopup";
import AppRoutes from "./routes";
import { theme } from "./theme/theme";
import { useEffect } from "react";

function App() {
  const queryClient = new QueryClient();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <CookiePolicy />
              <AppRoutes />
            </QueryClientProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </LocalizationProvider>
    </BrowserRouter>
  );
}

export default App;
