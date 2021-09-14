import React from "react";
import HornedBeasts from "./HornedBeasts";
import data from './data.json'



class Main extends React.Component {
  render() {
    console.log(data);
    return (
      <div>
        {data.map((element, index) => {
          return (<HornedBeasts key={index} title={element.title} img={element.image_url} dis={element.description} />)
        }
        )}
      </div>




    )

  }


}




export default Main;
