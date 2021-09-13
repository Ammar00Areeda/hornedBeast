import React from "react";

class HornedBeasts extends React.Component{
    render(){
        return(
            <>
          <h2>  HornedBeasts {this.props.title} </h2>
          <img src={this.props.imgUrl} alt={this.props.title} />
          <p>{this.props.dis} </p>
          </>
        )
    }
    


}

export default HornedBeasts;