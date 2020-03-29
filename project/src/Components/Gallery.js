import React from 'react'

function Gallery(props) {
  console.log('launches in gallery ', props.launches)
  console.log('launches-onestepfurther in gallery ', props.launches[0])

    return (
        <div className="Gallery">
          <h1>Gallery</h1>
        </div>
      );
    }
export default Gallery


    // console.log('props in gallery', props)
    // console.log('props hunt', props.props)
    // let launches = {props}
    
    // console.log('props hunt', launches.props.props[0])