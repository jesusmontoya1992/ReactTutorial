
import './App.css';
// import {User} from  './User';
// import { planets } from './planets';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const setToZero = () => {
    setCount(0);
  };

  return (
    <div className="App"> 
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>Set To Zero</button>
      {count}
    </div>
  );
}

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App"> 
//       <button onClick={() => {setCount(count + 1);}}> Increase </button>
//       <button onClick={() => {setCount(count - 1);}}> Decrease </button>
//       <button onClick={() => {setCount(0);}}> Set to Zero </button>
//       {count}
//     </div>
//   );
// }

// function App() {
//   // const [showText, setShowText] = useState(true);
//   const [textColor, setTextColor] = useState("black");

//   return (
//     <div className="App"> 
//       <button 
//         onClick={() => { 
//           // setShowText(!showText);
//           setTextColor(textColor === "black" ? "red" : "black");
//         }}
//       > 
//         Show/Hide 
//       </button>
//       {/* {showText && <h1> Hi my name is John </h1>} */}
//       <h1 style={{ color: textColor }}> Hi my name is John </h1>
//     </div>
//   );
// }

// function App() {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   }

//   return (
//     <div className="App"> 
//       <input type='text' onChange={handleInputChange}></input>
//       {inputValue}
//     </div>
//   );
// }

// function App() {
//   const [age, setAge] = useState(0);

//   const increaseAge = () => {
//     setAge(age + 1);
//   }

//   return (
//     <div className="App"> 
//      {age} 
//      <button onClick={increaseAge}> Increase Age </button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App"> 
     
//       {planets.map (
//         (planet, key) =>  planet.isGasPlanet && <h1 key = {key}> {planet.name} </h1> 
//       )}
      
//     </div>
//   );
// }

// function App() {
//   const users = [
//     {name: "Pedro", age: 21},
//     {name: "Jake", age: 25},
//     {name: "jessica", age: 45},
//   ];

//   return (
//     <div className="App">
//       {users.map((user, key) => {
//         return (
//           <User name = {user.name} age = {user.age} key = {key}/>
//         );
//       })} 
//     </div>
//   );
// }



// function App() {
//   const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin", "Lukas"];

//   return (
//     <div className="App"> 
//       {names.map((name, key) => {
//         return <h1 key = {key}> {name} </h1>;
//       })}
//     </div>
//   );

// }

// function App() {
//  const age = 17;
//  const isGreen = false;
 
//    return (
//     <div className="App"> 
//       {age >= 18 ? <h1> Over Age </h1> : <h1> Under Age</h1>}
//       <h1 style={{color: isGreen ? "green" : "red"}}>This has color</h1>
//       {isGreen && <button>This is a button</button>}
//     </div>
//    );
// }

// function App() {
//   return (
//     <div className="App"> 
//       <h1 className='name'> John </h1>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App"> 
//       <Job salary={90000} position="Senior SDE" company="Amazon" />
//       <Job salary={12000} position="Junior SDE" company="Google" />
//       <Job salary={10000} position="Project Manager" company="Netflix" />
//     </div>
//   );
// }

// const Job = (props) => {
//   return (
//     <div>
//       <h1>{props.salary}</h1>
//       <h1>{props.position}</h1>
//       <h1>{props.company}</h1>
//     </div>
//   );
// };


// function App() {
//   return (
//     <div className="App"> 
//       <User name="John" age={21} email="john@john.com" />
//       <User name="Mike" age={30} email="mike@john.com" />
//       <User name="Bob" age={35} email="bob@john.com" />
//     </div>
//   );
// }

// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App"> 
      
//     </div>
//   );
// }

export default App;
