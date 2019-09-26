import React from "react";
import "./App.scss";

/** Components **/
import Header from "./components/header/Header";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
