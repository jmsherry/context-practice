import { useState } from "react";
import "./App.css";

import { CountProvider } from "./contexts/count.context";

import Intervener from "./components/Intervener";
import NumberDisplay from "./components/NumberDisplay";
import DoubleSurround from "./components/DoubleSurround";

function App() {
  // const [val, setVal] = useState(0);
  return (
    <div className="App">
      <CountProvider>
        <Intervener>
          <Intervener>
            <Intervener>
              <NumberDisplay />
            </Intervener>
          </Intervener>
          <DoubleSurround />
        </Intervener>
      </CountProvider>
    </div>
  );
}

export default App;
