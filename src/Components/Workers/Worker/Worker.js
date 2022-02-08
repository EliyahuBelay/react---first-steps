import React from "react";

class Worker extends React.Component{
    render(){
        return(
            <div className="worker_container">
                <img className="worker_pic" src={this.props.pic}></img>
                <h3 className="worker_name" >{this.props.name}</h3>
                <p className="worker_job">{this.props.job}</p>
            </div>
        )
    }
};

export default Worker;