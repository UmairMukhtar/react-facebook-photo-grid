# React Facebook Photo Grid Example , Creates Grid Posts like Facebook

# React Facebook Photo Grid , Creates Grid Posts like Facebook

This component shows images in a neat square (or whatever dimensions you want) grid. Acts like facebooks image grids. Switches between several modes according to number of photos provided

You just need to pass any number of images to the component and rest will be taken care of.

<!-- <a href='https://cdn.rawgit.com/mukeshsoni/react-photo-grid/master/example/index.html' target='_blank'>Live Demo</a> -->

<!-- ![How it looks](https://farm8.staticflickr.com/7484/15736005117_57154548cc.jpg "How it looks") -->

#Usages

```JavaScript
  const data =[Image1, Image2, Image3, Image4, Image1, Image2],


// whereever you use ReactPhotoGrid
import Photogrid from "react-facebook-photo-grid";

   <Photogrid
      images={data} //required
    // width={600} //optional according to your need
    maxWidth={400} //optional according to your need
    ></Photogrid>
);
```

You dont need to worry about anything , the photo grid will automatically adjust according to the size of container , or if you want you can pass optional props width and maxWidth

<br/>
<strong>Two Picture Grid</strong>
<br/>
<img src="https://github.com/UmairMukhtar/react-facebook-photo-grid/blob/main/examplesPics/TwoPics.PNG"></img>
<br/>
<strong>Three Picture Grid</strong>
<br/>
<img src="https://github.com/UmairMukhtar/react-facebook-photo-grid/blob/main/examplesPics/ThreePics.PNG"></img>
<br/>
<strong>Four Picture Grid</strong>
<br/>
<img src="https://github.com/UmairMukhtar/react-facebook-photo-grid/blob/main/examplesPics/FourPics.PNG"></img>
<br/>
<strong>Five Picture Grid</strong>
<br/>
<img src="https://github.com/UmairMukhtar/react-facebook-photo-grid/blob/main/examplesPics/FivePics.PNG"></img>
<br/>
<strong>More Than Five Pictures Grid</strong>
<br/>
<img src="https://github.com/UmairMukhtar/react-facebook-photo-grid/blob/main/examplesPics/MorePics.PNG"></img>
<br/>
<strong>We also allow limited support for video, currently only one video along with many pictures</strong>
<br/>
<strong>One Video On Picture</strong>
<br/>
<img src="https://github.com/UmairMukhtar/react-facebook-photo-grid/blob/main/examplesPics/OnePicOneVideo.PNG"></img>
<br/>

Kindly let us know how we can imporove this package

<strong>Facebook</strong>

<a href='http://facebook.com/aenumair' target='_blank'>Our Facebook Page</a>

<strong>Linkedin</strong>

<a href='https://pk.linkedin.com/in/umair-mukhtar-828510153' target='_blank'>Our Linkedin Profile</a>

## Runing Locallay

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
