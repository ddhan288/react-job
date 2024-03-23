// const App = () => {
//   const name = 'Deepak'
//   const x = 5;
//   const y = 5;
//   const people = ['john','bob', 'alice','deepak']
//   const loggedIn = false;
//   const style = {
//     color: 'red',
//     fontSize: '55px',
//   };
//   return (
//   <>
//     <div className="text-5xl">App</div>
//     <p style={{color:'red', fontSize: '24px'}}>Hello {name}</p>
//     <p>The sum of {x} and {y} is {x+y}</p>
//     <ul>
//       {people.map((people) => (
//         <li key={people}>{people}</li>
//       ))}
//     </ul>
//     {loggedIn ? <h1> hello member</h1> : <h1>hello guest</h1>}

//   </>

//   );

// };

// export default App;

///APPP

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings/>
      <ViewAllJobs/>  
    </>
  );
};

export default App;
