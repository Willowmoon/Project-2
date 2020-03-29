import React from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function Details() {
    return (
        <div>
            <Carousel
        centered
        dots
      >
          <img alt = "" src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
      </Carousel>
        </div>
    )
}

export default Details


// import React, { useState, useEffect } from "react"

// export default function App() {
//   const [rocket, setRocket] = useState('');


//   // <link href="https://fonts.googleapis.com/css?family=Hind|Ubuntu:500,700&display=swap" rel="stylesheet">
//   // USING GOOGLE FONTS
//   // font-family: 'Hind', sans-serif;    Paragraph text
//   // font-family: 'Ubuntu', sans-serif;  HEADINGS BOLD
//   // https://api.spacexdata.com/v3/rockets

//   // const [isLoading, setIsLoading] = useState(false);
//   useEffect((rocket) => {
//     console.log("App - useEffect - rocket", rocket);
//     const rocketURL = "https://api.spacexdata.com/v3/rockets";
//     const makeAPICall = async () => {
//       // setIsLoading(true);
//       const res = await fetch(rocketURL);
//       const json = await res.json();
//       setRocket(json);
//       // setIsLoading(false);

//     };
//     makeAPICall();
//   }, []);

//   console.log("App - rocket", rocket);
  
//   return (
//     <div className="App">
//       {rocket && <><nav>
//         <h1>{rocket[0].rocket_name}</h1>
//         <h3 style={{fontSize: '1.5vw'}}>rockets</h3>
//         <h3 style={{fontSize: '1.5vw'}}>example</h3>
//         <h3 style={{fontSize: '1.5vw'}}>example2</h3>
//       </nav>
//       <img alt ={rocket[0].rocket_id} src ={rocket[0].flickr_images[0]}/>
//       <h2>{rocket[0].description}</h2>
//       <button><a href={rocket[0].wikipedia}>Learn More</a></button> 
//       <h2>Check the console log for data!</h2> </>}
//     </div>
//   );
// }

