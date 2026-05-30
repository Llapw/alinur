import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import AboutMe from "./routes/AboutMe";
import Contact from "./routes/Contact";
import Landing from "./routes/Landing";
import Layout from "./routes/Layout"

function App() {
  return (
    <Routes>
      <Route path="/alinur/" element={<Landing />} />

      <Route element={<Layout />}>
        <Route path="/alinur/home" element={<Home />} />
        <Route path="/alinur/about" element={<AboutMe />} />
        <Route path="/alinur/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;