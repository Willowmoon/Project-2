import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Icon from 'react-fa'

const Details = props => {


    if (!props.launches) {
        return <></>
    }
    console.log('THIS ONE-DETAILS', props)
    // console.log('THIS ONE-DETAILS', typeof props.launches[0].launch_date_unix)
    // console.log('THIS ONE-DETAILS', typeof props.match.params.id)

    const filterMap = props.launches.filter((index, i) => index.launch_date_unix == props.match.params.id)[0];
    // const filterImages = props.launches.links.filter((index, i) => index.flickr_images[i]);
    // console.log(filterImages)
    // const filterFix = filterMap.links
    const mapStart = filterMap.links.flickr_images.map((item, index) => {
        console.log(item)
        return (
            <img key={index} style={{ height: '60vh' }} alt="flickr images" src={item} />
        )
    })
    return (
        <div><p>{filterMap.mission_name}</p>
            {filterMap.links.flickr_images[0] ? <Carousel 
                slidesPerPage={1}
                centered
                arrowLeft={<Icon style={{fontSize: '30px', marginLeft: '25px'}} name="angle-left" />}
                arrowRight={<Icon style={{fontSize: '30px', marginRight: '25px'}} name="angle-right" />}
                addArrowClickHandler
                infinite
            >
                {mapStart}
            </Carousel>: <></> } 
            {/* <Carousel 
                slidesPerPage={1}
                centered
                arrowLeft={<Icon style={{fontSize: '30px', marginLeft: '25px'}} name="angle-left" />}
                arrowRight={<Icon style={{fontSize: '30px', marginRight: '25px'}} name="angle-right" />}
                addArrowClickHandler
                infinite
            >
                {mapStart}
            </Carousel> */}
            <p>{filterMap.rocket.rocket_name} </p>
            <p>{filterMap.links.article_link}</p>
            <p>{filterMap.links.wikipedia}</p>
            <p>{filterMap.links.video_link}</p>
            <p>{filterMap.details}</p>
            <img src={filterMap.links.mission_patch_small} />
        </div>
    )

}

export default Details
