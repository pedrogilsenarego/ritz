import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { theme } from "./theme/theme";
import Scroll from "./presentational/Scroll";

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              {/* <CookiePolicy /> */}
              {/* <div style={{ height: "100vh" }}>
                <Scroll /> */}
              <AppRoutes />
              {/* </div> */}
            </QueryClientProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </LocalizationProvider>
    </BrowserRouter>
  );
}

export default App;
