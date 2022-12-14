import Greet from "./1.components/1.function/Greet";
import { GreetNamed } from "./1.components/1.function/GreetNamed";
import GreetNamedOne from "./1.components/1.function/GreetNamedOne";
import { GreetNamedTwo } from "./1.components/1.function/GreetNamedTwo";
import Welcome from "./1.components/2.class/Welcome";
import { WelcomeOne } from "./1.components/2.class/WelcomeOne";
import LifeCycleA from "./10.life-cycle-methods/LifeCycleA";
import PostApi from "./11.ajax-calls/PostApi";
import ProductsAPI from "./11.ajax-calls/ProductsAPI";
import StudentAPI from "./11.ajax-calls/StudentAPI";
import StudentFetchAPI from "./11.ajax-calls/StudentFetchAPI";
import StudentReduxApi from "./11.ajax-calls/StudentReduxApi";
import UserAPI from "./11.ajax-calls/UserAPI";
import Routing from "./12.routing/Routing";
import ApiUsingHook from "./13.hooks/ApiUsingHook";
import ClassCounter from "./13.hooks/ClassCounter";
import HookCounter from "./13.hooks/HookCounter";
import HookUsingObject from "./13.hooks/HookUsingObject";
import HookWithString from "./13.hooks/HookWithString";
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
import NameListFive from "./7.list-rendering/NameListFive";
import NameListFour from "./7.list-rendering/NameListFour";
import NameListOne from "./7.list-rendering/NameListOne";
import NameListSix from "./7.list-rendering/NameListSix";
import NameListThree from "./7.list-rendering/NameListThree";
import NameListTwo from "./7.list-rendering/NameListTwo";
import AppStyles from "./8.styling/AppStyles";
import Inline from "./8.styling/Inline";
import Stylesheet from "./8.styling/Stylesheet";
import UserForm from "./9.form-handling/UserForm";
import UserFormOne from "./9.form-handling/UserFormOne";

function App() {
  function sayHello() {
    return "Hello"
  }
  return (
    <div className="container">
      <StudentReduxApi />
      {/* <ApiUsingHook /> */}
      {/* <HookUsingObject /> */}
      {/* <HookWithString /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <Routing /> */}
      {/* <StudentFetchAPI /> */}
      {/* <StudentAPI /> */}
      {/* <ProductsAPI /> */}
      {/* <UserAPI /> */}
      {/* <PostApi /> */}
      {/* <LifeCycleA /> */}
      {/* <UserFormOne /> */}
      {/* <UserForm /> */}
      {/* <AppStyles /> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={false}/> */}
      {/* <NameListSix /> */}
      {/* <NameListFive /> */}
      {/* <NameListFour /> */}
      {/* <NameListThree /> */}
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
