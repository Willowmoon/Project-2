import React from 'react'
import { Link } from "react-router-dom"

function Gallery(props) {
  // console.log('launches in gallery ', props.launches)
  // console.log('launches-onestepfurther in gallery ', props.launches[0])
  if (!props.launches) {
    return <></>
}
    const icons = props.launches.map((icon, i) => {
      // console.log('HEREHEREHERE GALLERY MAPPED PROPS',icon)
    return (
        <div key={i}>
        <Link to={`/gallery/${icon.mission_id}`}>
         <h1>{icon.rocket.rocket_name}</h1> </Link>
         {/* <p>{icon.links.mission_patch_small}</p>  */}
         <p>{icon.links.article_link}</p> 
         
         <p>{icon.details}</p> 
         {icon.links.mission_patch_small ? <img alt = "" src ={icon.links.mission_patch_small}/>: <h1>Info Coming soon</h1>}
         <button><a href={icon.links.wikipedia} target="_blank">Wikipedia</a></button> 
         <p>{icon.links.youtube}</p> 
        </div>
      )
    })
    return <div>{icons}</div>
  }
export default Gallery


    // console.log('props in gallery', props)
    // console.log('props hunt', props.props)
    // let launches = {props}
    
    // console.log('props hunt', launches.props.props[0])