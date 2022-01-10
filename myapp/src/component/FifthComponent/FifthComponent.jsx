import React,{Component} from 'react'
export default class FifthComponent extends Component{
    render(){
      return (
        <div className = "FifthComponent">
          FifthComponent with the use of class Component in another jsx file
        </div>
      );
    }
  }

  export class SixthComponent extends Component{
    render(){
      return (
        <div className = "SixthComponent">
          SixthComponent with the use of class Component in FifthComponent.jsx file
        </div>
      );
    }
  }