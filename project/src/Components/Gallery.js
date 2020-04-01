import React from 'react'
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'

function Gallery(props) {
  // console.log('launches in gallery ', props)
  // console.log('launches-onestepfurther in gallery ', props.launches[0])
  if (!props.launches) {
    return <></>
}
    const icons = props.launches.map((icon, i) => {
      // console.log('HEREHEREHERE GALLERY MAPPED PROPS',icon)
    return (
        <div key={i}>
          <Card style={{ width: '18rem' }}>
          {icon.links.mission_patch_small ? <Card.Img variant="top" src ={icon.links.mission_patch_small}/>: <h1>Info Coming soon</h1>}
          <Card.Body>
          <Link to={`/gallery/${icon.launch_date_unix}`}>
            <Card.Title><h1>{icon.mission_name}</h1> </Card.Title></Link>
            <button variant="primary"><Link to={`/gallery/${icon.launch_date_unix}`}>Go somewhere</Link></button>
          </Card.Body>
        </Card>
        </div>
      )
    })
    return <div>{icons}</div>
  }
export default Gallery