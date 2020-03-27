![Alt Text](https://media2.giphy.com/media/2WH6sqGKm027uq1Q9G/giphy.gif)

# Project Overview

## Project Links

- [https://git.generalassemb.ly/willowmoon/seir-224-project-2](github)
- [https://codesandbox.io/s/wonderful-vaughan-yos7k](sandbox)
- [https://github.com/r-spacex/SpaceX-API](API)

## Project Description

Planning to return all SpaceX launches in a timeline that can be constantly populated with planned/previous launches. Additionally, extended details pages with data showing multiple images/links to relevant content. Able to choose flights and specific rockets from populated dropdown list.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 
```
SpaceX API, planning to return SpaceX launch data and rockets in array. 
```

```
{data: {
	flickr_images: Array[2]
0: "https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2009_-_01_liftoff_south_full_wide_ro8a1280_edit.jpg?itok=8loiSGt1"
1: "https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2009_-_02_default_liftoff_west_full_wide_nn6p2062_xl.jpg?itok=p776nHsM"
wikipedia: "https://en.wikipedia.org/wiki/Falcon_1"
description: "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth."
rocket_id: "falcon1"
rocket_name: "Falcon 1"
rocket_type: "rocket"
} }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [https://i.imgur.com/ut5Mbgs.jpg](Mobile wireframe)
- [https://i.imgur.com/ySkPM8L.jpg](Mobile splash / architecture)
- [https://i.imgur.com/msiZYSy.jpg](Desktop/tablet wireframe)
- [https://i.imgur.com/HWNBYWf.jpg](Desktop/tablet wireframe 2)
- [https://i.imgur.com/eIVXZkX.jpg](Optional About)
- [https://i.imgur.com/ySkPM8L.jpg]( Architecture / Mobile)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page
- Create timeline to show current/past data in scrolling architecture
- Navigation of past flights/rockets

#### PostMVP EXAMPLE

- Photo gallery
- Interactive hover details buttons for timeline

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header including the nav | 
| Launch Gallery | Select launches by name/small image | 
| Details | Switch to details page to auto populate details abut specific launches | 
| Timeline | This will render data in a year by year basis to upcoming/past flight data | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating Timeline | H | 8hrs| - | - |
| Working with API | H | 3hrs| - | - |
| Page Architecture | H | 3hrs| - | - |
| Details page | H | 3hrs| - | - |
| Image Gallery | L | 3hrs| - | - |
| Navigation | H | 5hrs| - | - |
| CSS styling | H | 8hrs+ | - | - |
| Animations | L | 4hrs | - | - |
| Pop-up interactivity for timeline | L | 3hrs| - | - |
| gallery slider integration to timeline and details | L | 3hrs| - | - |

| Total | H | 43hrs | - | - |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 
 - [https://github.com/stephane-monnot/react-vertical-timeline](Vertical Timeline)
 - [https://github.com/aaron9000/react-image-timeline](Backup Timeline)
 - [https://brainhubeu.github.io/react-carousel/docs/examples/simpleUsage](Image slider for details pages/timeline(possibly))

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
