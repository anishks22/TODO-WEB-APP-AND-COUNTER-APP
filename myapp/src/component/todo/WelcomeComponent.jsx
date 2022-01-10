import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService'

class WelcomeComponent extends Component{
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this)
        this.state={
            WelcomeMessage:''
        }
        this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this)
        this.handleError=this.handleError.bind(this)
    }
    render(){
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                     Welcome {this.props.match.params.name}.
                     You can Manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage}
                        className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.WelcomeMessage}
                </div>
            </>
            )
    }
    retrieveWelcomeMessage(){
        //console.log('retrieve Clicked');
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response))
        //.catch()

        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSuccessfulResponse(response))
        //.catch()

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))
    }
    handleSuccessfulResponse(response){
        this.setState({WelcomeMessage:response.data.message})
    }
    handleError(error){
        console.log(error.response)
        let errorMessage='';
        if(error.message)
            errorMessage+=error.message
        
        if(error.response && error.response.data){
            errorMessage += error.response.data.message
        }
        this.setState({WelcomeMessage:errorMessage})
    }

}
export default WelcomeComponent