import Greet from "./1.components/1.function/Greet";
import { GreetNamed } from "./1.components/1.function/GreetNamed";
import GreetNamedOne from "./1.components/1.function/GreetNamedOne";
import { GreetNamedTwo } from "./1.components/1.function/GreetNamedTwo";
import Welcome from "./1.components/2.class/Welcome";
import { WelcomeOne } from "./1.components/2.class/WelcomeOne";
import Hello from "./2.jsx/Hello";

function App() {
  return (
    <div className="container">
      <Hello />
      {/* <Greet></Greet> */}
      {/* <Greet />
      <GreetNamed />
      <GreetNamedOne />
      <GreetNamedTwo />
      <Welcome />
      <WelcomeOne /> */}
    </div>
  );
}

export default App;
