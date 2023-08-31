import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Front End Development Boot Camp</h1>

      <header>1. Getting Started with the basics</header>

      <div class="first">Write the HTML.</div>
      <div class="second">Wrtie a CSS</div>
      <ul>
        <li>
          <b>Click here to learn more on HTML</b>
        </li>
        <li>
          <b>Click here to learn more about CSS</b>
        </li>
      </ul>
      <p>
        {" "}
        React is a free and open-source front-end JavaScript library for
        building user interfaces based on components. It is maintained by Meta
        and a community of individual developers and companies. React can be
        used to develop single-page, mobile, or server-rendered applications
        with frameworks like Next.js
      </p>
      <p>
        <u>For more information vist us on this website.</u>
        <br />
        For contact reach out on this number.
      </p>

      <footer>The end</footer>
    </>
  );
}

export default App;
