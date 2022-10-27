import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer";
import "./App.sass";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#64D1F8",
    },
    secondary: {
      main: "#FF5B8C",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <Hero />
        <About />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
