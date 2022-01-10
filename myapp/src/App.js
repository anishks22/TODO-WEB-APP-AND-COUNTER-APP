import React,{Component} from 'react';
// import Counter from './component/Counter/Counter';
import TodoApp from './component/todo/TodoApp';
// import FifthComponent,{SixthComponent} from './component/FifthComponent/FifthComponent'
// import logo from './logo.svg';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className="App">
        {/* <Counter/> */}
        <TodoApp/>
      </div>  
    );
  }
}

// class App extends Component{
//   render(){
//     return (
//       <div className = "App">
//         My Hello World
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//         <ThirdComponent></ThirdComponent>
//         <FourthComponent></FourthComponent>
//         <FifthComponent></FifthComponent>
//         <SixthComponent></SixthComponent>
//       </div>
//     );
//   }
// }

// //class Component
// class FirstComponent extends Component{
//   render(){
//     return (
//       <div className = "FirstComponent">
//         FirstComponent with the use of class Component
//       </div>
//     );
//   }
// }

// class SecondComponent extends Component{
//   render(){
//     return (
//       <div className = "SecondComponent">
//         Second Component with the use of class Component
        
//       </div>
//     );
//   }
// }

// //function Component
// function ThirdComponent(){
//   return(
//     <div className="ThirdComponent">
//       Third Component with the use of function Component
//     </div>
//   );
// }
// function FourthComponent(){
//   return(
//     <div className="FourthComponent">
//       Fourth Component with the use of function Component
//     </div>
//   );

// }
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

export default App;
