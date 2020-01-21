import React from "react";
import { Head } from "./components/head/head.component";
import { Middle } from "./components/middle/middle.component";
import { WhatWeDo } from "./components/whatWeDo/whatWeDo.component";
import { WorksComponent } from "./components/works/works.component";
import "./App.scss";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className='App'>
      <Head />
      <Middle />
      <WhatWeDo />
      <WorksComponent />
      <Footer />
    </div>
  );
}

export default App;
