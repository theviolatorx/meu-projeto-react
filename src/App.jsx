import MyComponent from "./components/MyComponent";
import MyCont from "./components/MyCont";
import MyList from "./components/MyList";
import MyData from "./components/MyData";

function App() {
  return (
    <div>
      <h1>Olá Mundo, React!</h1>
      <MyComponent />
      <MyButton titleButton="Clique" />
      <MyButton titleButton="Agora Clique" />
      <MyButton titleButton="Vai e  Clique" />

      <MyCont />
      <hr></hr>
      <h1> Listas no React</h1>
      <MyList />

      <hr></hr>

      <h1>Buscando dados Externos</h1>
      <MyData />
    </div>
  );
}

function MyButton(props) {
  return <button>{props.titleButton}</button>;
}
export default App;
