import React from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Details= props => {
    

    if (!props.launches) {
        return <></>
    }
    const park = props.launches.filter(park => park.name === props.match.params.name)
    // const icons = props.launches.map((icon, i) => {
        console.log('THIS ONE-DETAILS',props.launches[0].mission_name)
        console.log('THIS ONE-DETAILS',props)
        // const filter = props.launches[0].mission_name.filter(filter => filter.launches[0].mission_name === props.launches[0].mission_name)
    // const stuff = props.launches.filter(stuff => stuff.launches === props.launches)
    return (
        <div key=''>
            <Carousel
        centered
        dots
      >
          <img alt = "" src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
      </Carousel>
        </div>
    )
    // })
    // return <div>{icons}</div>
}

export default Details

// const ParkDetail = props => {
//     console.log('asdasdjasasdasdasd', props)
//     const park = props.parks.filter(park => park.name === props.match.params.name)
//     const parkfix = park[0]
//     console.log('parkdetail',props)
//     console.log('park-parkdetail',park)
//     console.log('park-parkdetail',park[0].images[0].url)
//     console.log('park-parkdetail',parkfix.images) 
//     const sources = parkfix.images.map((source, index) => {            
//       return (
//           <div key={index} >
//               <img style={{width: '50%'}} key={park.id} src={`${source.url}`} alt="source_image" />
//           </div>
//       );
//   });
//     return (
//           // <></>
//             <div className="detail" key={park.id}>
//               <div className="imgdivthing">
//               <img style={{width: '100%'}}src ={parkfix.images[0].url} alt=""/>
//               <h1>{parkfix.name}</h1>
//               <p>{parkfix.description}</p>
//               </div>
//               <div className="stuff">
//                 <h2>Address</h2>
//                 <p>{parkfix.addresses[0].line1},</p>
//                 <p>{parkfix.addresses[0].city}, {parkfix.addresses[0].stateCode} {parkfix.addresses[0].postalCode}</p>
//                 <h2>Directions</h2>
//                 <p>{parkfix.directionsInfo}</p>
//                 <button >
//                   <a style={{color: 'white', textDecoration:"none"}}target="_" href={parkfix.url}>Read More</a>
//                 </button>
//                 <h2>Images</h2>
//                 <div style={{display:'flex', flexDirection:'row'}}>
//                   {sources}
//                 </div>
//               </div>
              
  
  
  
//             </div>
          
//     );
//   }
  
//   export default ParkDetail;
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

