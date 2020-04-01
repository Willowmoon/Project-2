import React from 'react'
// import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom"


function Home(props) {
  // console.log('launches in home ', props.launches[27].mission_name)
  // console.log('launches-onestepfurther in home ', props.launches[0])

      
      return (
        <div className="Home">
          <h1>
            I wanna go Home

          </h1>
        </div>
      );
    }

export default Home



// {launches && 
//   <>
//    <p>{launches[0].rocket.rocket_name}</p>
//    <p>{launches[13].rocket.rocket_name}</p>
//    <p>{launches[22].rocket.rocket_name}</p>
//    <p>{launches[11].rocket.rocket_name}</p>
//    <p>{launches[1].rocket.rocket_name}</p>
//    <p>{launches[2].rocket.rocket_name}</p>
    
//   </>}


// import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom"


// function Home() {

//     const [rocket, setRocket] = useState(false)

//     useEffect((rocket) => {
//         console.log("App - useEffect - rocket", rocket);
//         const rocketURL = "https://api.spacexdata.com/v3/rockets";
//         const makeAPICall = async () => {
//           // setIsLoading(true);
//           const res = await fetch(rocketURL);
//           const json = await res.json();
//           setRocket(json);
//           // setIsLoading(false);
    
//         };
//         makeAPICall();
//       }, []);
    
//       console.log("App - rocket", rocket);
      
//       return (
//         <div className="App">
//           {rocket && 
//           <>
//             <div>
//                 <img alt ={rocket[0].rocket_id} src ={rocket[0].flickr_images[0]}/>
//                 <h1>{rocket[0].rocket_name}</h1>
//                 <h2>{rocket[0].description}</h2>
//                 <button><a href={rocket[0].wikipedia}>Learn More</a></button> 
//            </div>
//           </>}
//         </div>
//       );
//     }

// export default Home