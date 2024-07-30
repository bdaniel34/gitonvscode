import { useState } from "react";
import "./App.css";

function App() {
  const [first, setfirst] = useState(true);
  const [second, setsecond] = useState(false);

  return (
    <div className="App">
      <h2>
        Using the principles of conditional rendering:the first example is set
        to true so it doesnt show anything according to the logic stablish, and the second
        example it´s set to false so it shows the content as default.
      </h2>
      {first ? (
        <button onClick={() => setfirst(!first)}>
          Because the condition is true it renders this button{" "}
        </button>
      ) : (
        <button onClick={() => setfirst(!first)}>
          This is place after the colon so its false{" "}
        </button>
      )}

      {first ? null : (
        <h3>
          The condition is false so it renders this title plus a picture because
          there are place after the colon and on the left side of the colon
          there is null
        </h3>
      )}
      {first ? null : (
        <img
          className="tt"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0cOcvTWxFJSXWNnR4jZsjZpLjZ5cfaDpuUQ&s"
        ></img>
      )}
      <br />
      <h2>-Second example -</h2>
      {second ? (
        <button onClick={() => setsecond(!second)}>
          This is true so it renders after clicking{" "}
        </button>
      ) : (
        <button onClick={() => setsecond(!second)}>
          The set is false now so it renders this button{" "}
        </button>
      )}

      {second ? null : <h3>Here it´s the reverse; it´s set to false</h3>}
      {second ? null : (
        <img
          className="tt"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruKJZXwkljTLj_rafZJRU7WT0omoh0LCTgA&s"
        ></img>
      )}
    </div>
  );
}

export default App;
