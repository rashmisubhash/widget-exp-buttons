import PaymentButton from "./component/PaymentButton"

function App() {
  
  document.currentScript = document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();

  let eventUrl = document.currentScript.getAttribute('eventUrl');

  console.log(eventUrl)

  return (
    <div className="">
      <PaymentButton eventUrl={eventUrl} />
    </div>
  );
}

export default App;
