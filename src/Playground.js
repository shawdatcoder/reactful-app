import React from "react";
import { ReactDOM } from "react";

function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }



class Clockclass extends React.Component {
    constructor(props){
        super(props);
        this.state =  {date: new Date()};
    
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render(){

        return (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
          );
    }
    
   
  }

  export {Clock, Clockclass}