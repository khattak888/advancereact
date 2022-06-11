

import React, { Component } from 'react'
import './App.css'
import Employee from './Components/Context/Employee'
export const MyContext = React.createContext() 
// import LifeCycle from './LifeCycle';
// import Employee from './Components/Liftingstateup/Employee'
// import UseCallabackParent from './Components/UseCallabackParent'
// import UseCallaback from './Components/UseCallaback'
// import UseMemo from './Components/UseMemo'
// import State from './Components/useState/State'
// import CompositionvsInheritence from './Components/CompositionvsInheritence'

 class App extends Component {


   state={
     name:"bilalkhattak",
     department:"Development",
     salary:5000

   }
   changeHandler = ()=>{
     this.setState({salary:this.state.salary+500})
   }
  render() {
    const data = {
      salary:this.state.salary,
      changeClick:this.changeHandler
    }
    return (
      <>

    //  <MyContext.Provider value = {data}>
    //    <Employee />
    //    </MyContext.Provider>
      {/* <LifeCycle /> */}
        {/* <State /> */}
        {/* <UseMemo /> */}
       {/* <UseCallabackParent /> */}
       {/* <Employee /> */}
       {/* <CompositionvsInheritence color="red" name="bilal" depart="sale" salary={5000}/> */}
       {/* <CompositionvsInheritence color="green" name="khan" depart="development" salary={7000}/> */}
       {/* <CompositionvsInheritence color="blue" name="khattak" depart="IT" salary={9000}/> */}

      </>
    )
  }
}
export default App