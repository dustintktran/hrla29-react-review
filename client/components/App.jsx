import React from 'react';
import List from './List.jsx';

// var App = (props) => (
//     <h1>Frick React by ya boi: {props.first + ' ' + props.last} </h1>
// )

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first: this.props.first,
            last: this.props.last,
        }
        this.clickFirstName = this.clickFirstName.bind(this);
        this.clickLastName = this.clickLastName.bind(this);
    }
    clickFirstName(){
        this.setState({first: document.getElementById('firstName').value});
        console.log('weee');
    }
    clickLastName(event){
        console.log(event.target)
        this.setState({last: document.getElementById('lastName').value});
    }
    render(){   
        return(
            <div>
            <div>
            <h1> Frick React by ya boi: {this.state.first + ' ' + this.state.last} </h1>
            First Name:<input id='firstName'></input><button onClick={this.clickFirstName}id='firstButton'/>
            Last Name:<input id='lastName'></input><button onClick={this.clickLastName} id='secondButton'/>
            </div>
                {this.state.first === 'Dustin' && this.state.last === 'Tran' ? <List /> : 'Wrong Person u ho'}
            </div>
        )
    }
}

export default App;