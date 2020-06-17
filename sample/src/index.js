import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// Nguyen duc hoang React tutorials

// function updateTimer(){
//     const element = (
//         <div>
//             <h1>Time update example</h1>
//             <h2>Current timer is: {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// }
// setInterval(
//     updateTimer,1000);

/*

function UserInfo(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
        </div>
    );
}
*/

/*class UserDetail extends React.Component {
    render(){
        return (
            <div className="UserDetail">
                <p>Name: {this.props.name}</p>
                <p>Email: {this.props.email}</p>
            </div>
        );
    }
}

class OtherInfo extends React.Component {
    render() {
        return (
            <div className="OtherInfo">
                <p>Other infomation: {this.props.otherInformation}</p>
            </div>
        );
    }
}
// ES6
class UserInfo extends React.Component {
    render() {
        return (
            <div>
                <UserDetail name={this.props.name} email={this.props.email}/>
                <OtherInfo otherInfomation={this.props.otherInformation}/>
            </div>
        );
    }
}

const element = <UserInfo name={"Hoang Hai"} email={"abc@gmail.com"} otherInformation={"He like to work from home"}/>
ReactDOM.render(
    element,
  document.getElementById('root')
);*/

/*
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0};
    }
    incrementCounter(){
        this.setState((prevState, props) => ({
                seconds: prevState.seconds + 1
            })
        );
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.incrementCounter(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render(){
        return (
            <div>
                <h1>This is a counting machine</h1>
                <h2>Seconds: {this.state.seconds}</h2>
            </div>

        );
    }
}

ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
);
*/

/*

06
class ToogleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOn: true};
        this.buttonClick = this.buttonClick.bind(this)
    }
    buttonClick(){
        this.setState(prevState => ({
            isOn: !prevState.isOn

        }));
    }
    /!*
    buttonClick = () => {
        // alert(123);
        this.setState(prevState => ({
            isOn: !prevState.isOn
        }));
    }
    *!/
    render() {
        return (
            <button className="ToggleButton" onClick={this.buttonClick}>
                This is a toggle button
                {this.state.isOn ? " turning: ON": " turning: OFF"}
            </button>
        );
    }
}

ReactDOM.render(
  <ToogleButton/>,
  document.getElementById('root')
);
*/

/*
07
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }
    handleLogout = () => {
        this.setState({isLoggedIn: false});
    }

    handleLogIn = () => {
        this.setState({isLoggedIn: true});
    }
    render() {
        let myButton = null;
        let title = null;
        if(this.state.isLoggedIn) {
            myButton = <button onClick={this.handleLogout}>LogOut</button>
        }
        else {
            myButton = <button onClick={this.handleLogIn}>LogIn</button>
        }
        title = this.state.isLoggedIn ? <h1>Welcome, you just Logged in</h1>:<h1>Goodbye, Logged out</h1>
            return (
                <div>
                    {title}
                    {myButton}
                </div>
            );
    }
}

class MailComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Mail statistics</h1>
                {this.props.newMessages.length > 0 &&
                    <h2>
                        You have {this.props.newMessages.length} new messages.
                    </h2>
                }
            </div>
        );
    }
}
ReactDOM.render(
    // <LoginComponent/>,
    <MailComponent newMessages={['How are you?','abc','No no no']}/>,
    document.getElementById(('root'))
)

*/

/*
08
function ListItem(props) {
    return <li>{props.value}</li>;
}

class AnimalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.listItems = props.animals.map(
            (animal, index) => <ListItem key = {animal.id} value={index.toString() + " - " + animal.name}/>
        );
    }
    render() {
        return (<ul>
                {this.listItems}
        </ul>
        );
    }
}

// const animals = ["lion","tiger","dog",'cat','dinosaur'];
const animals = [
    {
        id: "xy000",
        name: "lion",
        title: "This is a lion"
    },
    {
        id: "xy001",
        name: "tiger",
        title: "This is a tiger"
    },
    {
        id: "xy002",
        name: "dog",
        title: "this is a dog"
    },
    {
        id: "xy003",
        name: "cat",
        title: "this is a cat"
    },
    {
        id: "xy004",
        name: "dinosuar",
        title: "This is a dinosuar"
    }
]
ReactDOM.render(
  <AnimalComponent animals={animals}/>,
  document.getElementById('root')
);
*/


/*
// 09 & 10
class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yourName: "",
            numOfFriends: 1
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            // numOfFriends: event.target.value
        });
    }
    handleSubmit = (event) => {
        // alert("Ban da submit du lieu:" + this.state.textData);
        alert("Name: " + this.state.yourName + " NumofFriends:" + this.state.numOfFriends);
        event.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit} className="inputForm">
                <label>
                    Name:
                    <input
                        type="text"
                        value={this.state.yourName}
                        name="yourName"
                        onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                    Number of friends:
                    <input
                        type="number"
                        name="numOfFriends"
                        value={this.state.numOfFriends}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}

ReactDOM.render(
    // <h1>Forms and handling Multiple Inputs</h1>,
    <FormComponent/>,
    document.getElementById('root')
);
*/

/*
// 11
class PaneComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                {this.props.up}
                {this.props.children}
                {this.props.down}

            </div>
        );
    }
}

function UpComponent(props){
    return (
        <div className="red">
            This is RED
        </div>
    );
}

function DownComponent(props) {
    return (
        <div className="green">
            This is BLUE
        </div>
    );
}
ReactDOM.render(
  <PaneComponent
    up={<UpComponent />}
    down={<DownComponent />}>

    <p>This is children part</p>
  </PaneComponent>,
  document.getElementById('root')
);*/

