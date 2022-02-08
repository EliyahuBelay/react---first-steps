import React from "react";
import Food from "./Food/Food";

class Foods extends React.Component {
    render() {
        return (
            <div className="foods_container">
                <Food 
                name="pizza" 
                description="At first glance it may look like a regular Hawaiian pizza – but there’s something new about this classic take away dish that will blow minds."
                pic="https://images.pexels.com/photos/2180877/pexels-photo-2180877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <Food 
                name="pizza" 
                description="At first glance it may look like a regular Hawaiian pizza – but there’s something new about this classic take away dish that will blow minds."
                pic="https://images.pexels.com/photos/2180877/pexels-photo-2180877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <Food 
                name="pizza" 
                description="At first glance it may look like a regular Hawaiian pizza – but there’s something new about this classic take away dish that will blow minds."
                pic="https://images.pexels.com/photos/2180877/pexels-photo-2180877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
        )
    }
};

export default Foods;