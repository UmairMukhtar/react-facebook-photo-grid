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

<strong>Two Picture Grid</strong>
<br/>
<img src="https://github.com/UmairMukhtar/react-facebook-photo-grid/blob/main/examplesPics/TwoPics.PNG"></img>
<strong>Three Picture Grid</strong>
<br/>
<img src="https://github.com/UmairMukhtar/react-facebook-photo-grid/blob/main/examplesPics/ThreePics.PNG"></img>
<strong>Four Picture Grid</strong>
<br/>
<img src="https://github.com/UmairMukhtar/react-facebook-photo-grid/blob/main/examplesPics/FourPics.PNG"></img>
<strong>Five Picture Grid</strong>
<br/>
<img src="https://github.com/UmairMukhtar/react-facebook-photo-grid/blob/main/examplesPics/FivePics.PNG"></img>
<strong>More Than Five Pictures Grid</strong>
<br/>
<img src="https://github.com/UmairMukhtar/react-facebook-photo-grid/blob/main/examplesPics/MorePics.PNG"></img>

<strong>We also allow limited support for video, currently only one video along with many pictures</strong>

<strong>One Video On Picture</strong>
<br/>
<img src="https://github.com/UmairMukhtar/react-facebook-photo-grid/blob/main/examplesPics/OnePicOneVideo.PNG"></img>

Kindly let us know how we can imporove this package

<strong>Facebook</strong>

<a href='http://facebook.com/aenumair' target='_blank'>Our Facebook Page</a>

<strong>Linkedin</strong>

<a href='https://pk.linkedin.com/in/umair-mukhtar-828510153' target='_blank'>Our Linkedin Profile</a>
