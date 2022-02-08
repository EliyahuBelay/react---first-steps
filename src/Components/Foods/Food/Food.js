import React from "react";

class Food extends React.Component{
    render(){
        return(
            <div className="food_container">
                <h3 className="food_name">{this.props.name}</h3>
                <p className="food_description">{this.props.description}</p>
                <img className="food_pic" src={this.props.pic}></img>
            </div>
        )
    }
};

export default Food;