import React, { useState } from "react";

import Child from "./child";

function App() {
  let [isOn, setIsOn] = useState(false);



  return (
    <div className=" mt-5 text-center">
      <h1>Room</h1>

      <h3>
        {isOn ? "The room is bright" : "The room is dark"}
      </h3>

      <Child isOn={isOn} setIsOn={setIsOn} />
    </div>

  );
}

export default App;
