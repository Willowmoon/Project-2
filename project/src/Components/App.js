import React, {useState, useEffect} from "react"
import { Route, Switch, Link } from "react-router-dom"
import '../App.css';
import Gallery from "./Gallery"
import Details from "./Details"
import Timeline from "./Timeline"
import Home from './Home'

function App() {
  //call json here
  const [launches, setLaunches] = useState(false)
  useEffect((launches) => {
      // console.log("Main - useEffect - launches", launches);
      const launchURL = "https://api.spacexdata.com/v3/launches";
      const makeAPICall = async () => {
        // setIsLoading(true);
        const res = await fetch(launchURL);
        const json = await res.json();
        setLaunches(json);
        console.log('show json is receiving data in main ',json[0].rocket.rocket_name)
        // setIsLoading(false);
      };
      makeAPICall();
    }, []);


    console.log('launches in app', launches)
    // console.log('launches in app', props)
  return (
    <div className="App">
      <nav>
        <Link to="/" style={{textDecoration: "none"}}>
            <h1 className="navText" >Launch Site</h1>
        </Link>
        <Link to="/gallery" style={{textDecoration: "none"}}>
            <h2 className="navText" >Gallery</h2>
        </Link>
        <Link to="/timeline" style={{textDecoration: "none"}}>
            <h2 className="navText" >Timeline</h2>
        </Link>
    </nav>
    <Switch>
      <Route 
        exact path='/'
        render={props => <Home {...props} launches={launches} />}
      />
      <Route 
        path='/gallery'
        render={props => <Gallery {...props} launches={launches} />}
      />
      <Route 
        path='/timeline'
        render={props => <Timeline {...props} launches={launches} />}
      />
    </Switch>
    </div>
  );
}

export default App;


// import React, {useState, useEffect} from "react"
// import { Route, Switch } from "react-router-dom"
// import Home from "./Home"
// import Gallery from "./Gallery"
// import Details from "./Details"
// import Timeline from "./Timeline"


// function Main() {
   
//     return (
//         <main>
//             <switch>
//                 <Route 
//                     exact path = '/'
//                 />
//                 <Route
//                     path = '/gallery'
//                     render = {}
//                 />
//                 <Route
//                     path = '/timeline'
//                 />
//             </switch>
//         </main>
//     )
// }

// export default Main


