import Greet from "./1.components/1.function/Greet";
import { GreetNamed } from "./1.components/1.function/GreetNamed";
import GreetNamedOne from "./1.components/1.function/GreetNamedOne";
import { GreetNamedTwo } from "./1.components/1.function/GreetNamedTwo";
import Welcome from "./1.components/2.class/Welcome";
import { WelcomeOne } from "./1.components/2.class/WelcomeOne";
import Hello from "./2.jsx/Hello";
import Greeting from "./3.props/Greeting";
import GreetingOne from "./3.props/GreetingOne";
import GreetValidateOne from "./3.props/GreetValidateOne";
import Counter from "./4.state/Counter";
import Message from "./4.state/Message";
import User from "./4.state/User";
import ClassClick from "./5.event-handling/ClassClick";
import EventBind from "./5.event-handling/EventBind";
import FunctionClick from "./5.event-handling/FunctionClick";
import Parent from "./5.event-handling/parent-child/Parent";
import UserGreetingFour from "./6.conditional-rendering/UserGreetingFour";
import UserGreetingOne from "./6.conditional-rendering/UserGreetingOne";
import UserGreetingThree from "./6.conditional-rendering/UserGreetingThree";
import UserGreetingTwo from "./6.conditional-rendering/UserGreetingTwo";
import NameListOne from "./7.list-rendering/NameListOne";
import NameListThree from "./7.list-rendering/NameListThree";
import NameListTwo from "./7.list-rendering/NameListTwo";

function App() {
  function sayHello() {
    return "Hello"
  }
  return (
    <div className="container">
      <NameListThree />
      {/* <NameListTwo /> */}
      {/* <NameListOne /> */}
      {/* <UserGreetingFour /> */}
      {/* <UserGreetingThree /> */}
      {/* <UserGreetingTwo /> */}
      {/* <UserGreetingOne /> */}
      {/* <Parent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <br />
      <ClassClick /> */}
      {/* <User /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <GreetValidateOne 
          name="Scott" 
          age={46}
          isAdmin={true}
          department={null}
          grade={undefined}
          getMessage={() => "We are using prop types"}
          address={{RoadNumber: 1, Street: "1st Main"}}
          skills={["JavaScript", "ReactJS", "NodeJS"]}
          status="Loading"
          code="ABC123"
      /> */}
      {/* <Greeting id={1}
        name="Scott"
        isAdmin={true}
        department={null}
        grade={undefined}
        sayHello={sayHello}
        getData={function () {
          return "Here is your data"
        }}
        getMessage={() => "Welcome to Props"}
        address={{ city: "Boston", country: "USA" }}
        skills={["JavaScript", "ReactJS", "NodeJS"]}
      >
        <p style={{"display": "inline"}}>This is child component</p>
      </Greeting>
      <br />
      <GreetingOne id={1}
        name="Scott"
        isAdmin={true}
        department={null}
        grade={undefined}
        sayHello={sayHello}
        getData={function () {
          return "Here is your data"
        }}
        getMessage={() => "Welcome to Props"}
        address={{ city: "Boston", country: "USA" }}
        skills={["JavaScript", "ReactJS", "NodeJS"]}
      >
        <p style={{"display": "inline"}}>This is child component</p>
      </GreetingOne> */}
      {/* <Greeting name="Adam"/>
      <Greeting name="Tuan"/> */}
      {/* <Hello /> */}
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
