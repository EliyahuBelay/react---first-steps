import React from "react";
import Worker from "./Worker/Worker.js";

class Workers extends React.Component {
    render() {
        return (
            <div className="workers_container">
                <Worker
                    pic="https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    name="Salamanka"
                    job="Big Boss"
                />
                <Worker
                    pic="https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    name="Salamanka"
                    job="Big Boss"
                />
                <Worker
                    pic="https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    name="Salamanka"
                    job="Big Boss"
                />
            </div>
        )
    }
};


export default Workers;