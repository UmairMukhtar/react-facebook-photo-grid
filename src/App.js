import "./App.css";
import Photogrid from "react-facebook-photo-grid";
import Image1 from "./assests/waffle.jpg";
import Image2 from "./assests/waffle1.jpg";
import Image3 from "./assests/waffle2.jpg";
import Image4 from "./assests/waffle3.jpg";

function App() {
  const data = [
    [Image1],
    [Image1, Image2],
    [Image1, Image2, Image3],
    [Image1, Image2, Image3, Image4],
    [Image1, Image2, Image3, Image4, Image1],
    [Image1, Image2, Image3, Image4, Image1, Image2],
  ];
  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <div style={{ padding: 15 }}>
            <h1>{index + 1} picture layout</h1>
            <Photogrid
              images={item}
              // width={600}
              maxWidth={400}
            ></Photogrid>
          </div>
        );
      })}
    </div>
  );
}

export default App;
