import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TopBar from "./views/global/topbar";
import Sidebar from "./views/global/sidebar";
import Dashboard from "./views/dashboard";
// import Team from "./views/team";
// import Invoices from "./views/invoices";
// import Contacts from "./views/contacts";
// import Bar from "./views/bar";
// import Form from "./views/form";
// import Line from "./views/line";
// import Pie from "./views/pie";
// import FAQ from "./views/faq";
// import Geography from "./views/geography";
// import Calender from "./views/calender";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <TopBar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
