[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/us-national-parks-api?style=flat-square)](/LICENSE.txt)
## National Parks in the US

Directory of US National Parks, built with Vue.js, Express.js, and Mapbox. [View working component](https://us-national-parks-api-8cfadda86ff0.herokuapp.com). **"Eco" dyno, takes a few seconds to wake up.** 

## Project Status

Mostly built. Now testing.

## Project Screen Shots

* All parks (default view).
![screen shot of project](/screenshots/us-national-parks-api-screenshot1.png?s=600)

* Alaska parks.
![screen shot of project](/screenshots/us-national-parks-api-screenshot2.png?s=600)

* Arizona parks, with details on Grand Canyon.
![screen shot of project](/screenshots/us-national-parks-api-screenshot3.png?s=600)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine. The Express server uses the Fetch API. You will need a later version of Node (18+) for this to work.

Installation:

`npm install`  

To Run Vue:

`npm run dev`   

To Start the Express server:

`npm run start`  

To Visit App:

Visit the localhost port displayed in the terminal after running `npm run dev`. You may need to disable your browser's Cross-Origin Restrictions.

## Reflection

My goal was to build a searchable directory of US National Parks. The directory would offer written information, a photo, and an area map of each park.

I pulled written information from the National Park Service (NPS) API. This works nicely and ensures information is up to date. The API also offers images, but this has some problems. Some parks have multiple images; some parks have none; the images are a mix of portrait and landscape; and the image sizes vary and are sometimes huge. Instead, I choose park images on my own and stored them locally. The NPS API also offers longitude and latitude coordinates for each park so I use these coordinates to then pull an area map for each park from Mapbox using its API.

## Acknowledgments

* Park information, photos, and logo from the [National Park Service](https://www.nps.gov/index.htm).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Shields from [Shields](https://shields.io).
* Helpful advice on capitalizing letters in JavaScript [Flexiple](https://flexiple.com/javascript/javascript-capitalize-first-letter).
