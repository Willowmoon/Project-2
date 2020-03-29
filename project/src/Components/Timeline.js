import React from 'react'
import {Link} from 'react-router-dom'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//make function for creating VerticalTimelineElements 

function Timeline(props) {
    if (!props.launches) {
        return <></>
    }
        const icons = props.launches.map((icon, i) => {
          // console.log('HEREHEREHERE GALLERY MAPPED PROPS',icon)
        return (
            <div key={i}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#21272B', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: '#2B4867', color: '#fff' }}
                >
            <Link to={`/gallery/${icon.mission_id}`}>
             <h1>{icon.rocket.rocket_name}</h1> </Link>
             {/* <p>{icon.links.mission_patch_small}</p>  */}
             {/* <p>{icon.links.article_link}</p>  */}
             {/* <p>{icon.links.wikipedia}</p>  */}
             {/* <p>{icon.links.youtube}</p>  */}
             <p>{icon.details}</p> 
             {icon.links.mission_patch_small ?
             <img alt = "" src ={icon.links.mission_patch_small}/>: <h1>Info Coming soon</h1>}
             </VerticalTimelineElement>
             <p></p>
            </div>
          )
        })
        return(
            <div>
                 <VerticalTimeline>
                     {icons}
                 </VerticalTimeline>
            </div>
        )
      }
    // console.log('timeline props yall',props.launches[33])
    // return (
    //     <div>
    //         <VerticalTimeline>
    //             <VerticalTimelineElement
    //                 className="vertical-timeline-element--work"
    //                 contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    //                 contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    //                 date="2011 - present"
    //                 iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    //             >
    //                 <h1>image.name</h1>
    //             </VerticalTimelineElement>
    //                 <VerticalTimelineElement
    //                 iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    //             />
    //         </VerticalTimeline>
    //     </div>
    // )


export default Timeline
