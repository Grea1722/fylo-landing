import { useState } from "react";
import "./App.css";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Features } from "./components/Features";
import { CallToAction } from "./components/CallToAction";
import { Comments } from "./components/Comments";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <Header />
      <Hero />
      <Features />
      <CallToAction />
      <Comments />
    </div>
  );
}

export default App;
