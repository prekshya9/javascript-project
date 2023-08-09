import { useEffect, useState } from "react"
// // import { AiOutlinePlusCircle } from "react-icons/ai"
// // import { AiOutlineMinusCircle } from "react-icons/ai"
// // import { GrPowerReset } from "react-icons/gr"


// /*function App(){
//   const [value, setValue] = useState(0)
//   function funcA(){
//     setValue((prev)=>prev+1)
//   }
//   return(
//     <>
//       <h1>{value}</h1>
//       <button onClick={funcA}><AiOutlinePlusCircle />Increment</button>
//     </>
//   )
// }*/

// function App() {
//   const [value, setvalue] = useState(0)
//   function G() {
//     setvalue((prev) => prev - 1)
//   }
//   function A() {
//     setvalue((prev) => prev + 1)
//   }
//   function P() {
//     setvalue(0)
//   }
//   useEffect(()=>{
//     alert("I am prekshya")
//   })
//   return (
//     <>
//       <h1 style={{ color: value < 0 ? "red" : "green" }}>{value}</h1>
//       <button onClick={G}>Decrement</button>
//       <button onClick={P}>Reset</button>
//       <button onClick={A}>Increment</button>
//     </>
//   )

// }

// export default App
function App(){
    return(
       <main>
        <section className="Container"> 
            <h3> 0 birthday today</h3>
        <list/>
        </section>
       </main>
    ) ;
}
export default App;