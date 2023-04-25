import { useState } from "react";
import PaymentButton from "./component/PaymentButton"

function App() {

  const [eventUrl, setEventUrl] = useState("");

  window.konfhubButton = function(url){
    setEventUrl(url);
  };

  return (
    <div className="">
      <PaymentButton />
    </div>
  );
}

export default App;
