import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };
  const handleEqual = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput("Hatalı İfade");
    }
  };
  const handleClear = () => {
    setInput("");
  };
  const handleSliceDelete = () => {
    setInput(input.slice(0, -1));
  };
  return (
    <div class="container">
      <div class="calculator">
        <h5>CASİO</h5>
        <form>
          <div class="display">
            <input type="text" value={input} readonly="readonly" />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleClear} />
            <input type="button" value="DE" onClick={handleSliceDelete} />
            <input type="button" value="." onClick={() => handleClick(".")} />
            <input type="button" value="/" onClick={() => handleClick("/")} />
          </div>
          <div>
            <input type="button" value="7" onClick={() => handleClick("7")} />
            <input type="button" value="8" onClick={() => handleClick("8")} />
            <input type="button" value="9" onClick={() => handleClick("9")} />
            <input type="button" value="*" onClick={() => handleClick("*")} />
          </div>
          <div>
            <input type="button" value="4" onClick={() => handleClick("4")} />
            <input type="button" value="5" onClick={() => handleClick("5")} />
            <input type="button" value="6" onClick={() => handleClick("6")} />
            <input type="button" value="-" onClick={() => handleClick("-")} />
          </div>
          <div>
            <input type="button" value="1" onClick={() => handleClick("1")} />
            <input type="button" value="2" onClick={() => handleClick("2")} />
            <input type="button" value="3" onClick={() => handleClick("3")} />
            <input type="button" value="+" onClick={() => handleClick("+")} />
          </div>
          <div>
            <input type="button" value="00" onClick={() => handleClick("00")} />
            <input type="button" value="0" onClick={() => handleClick("0")} />
            <input
              type="button"
              value="="
              class="equal"
              onClick={handleEqual}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
