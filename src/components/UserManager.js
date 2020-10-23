import React from 'react';
// Task 7 import AppContext from './AppContext';
import './master.css';

class UserManager extends React.Component {

  // Task 7 static contextType = AppContext;

// Task 6
  // componentDidMount() {
  //   console.log("UserManager.componentDidMount( )");
  //
  //   // let the property in App point to this
  //   // Task 7
  //   // let appContext = this.context;
  //   // appContext.userManager = this;
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("UserManager.componentDidUpdate( )");
  //
  //   // only do this if the ID has changed
  //
  //   // Task 7
  //   // if (prevState.userId !== this.state.userId) {
  //   //
  //   //   // calls ALL the event listeners and pass them the new user ID
  //   //   this.idChangeListeners.forEach(listener => listener(this.state.userId));
  //   // }
  // }

  constructor(props) {
    super(props);

    // a list of objects that listen to ID change events
    // Task 7 this.idChangeListeners = [];

    // Task 2

    // these are necessary for "this" to point to this object
    // Task 3 this.handleUserIdChange = this.handleUserIdChange.bind(this);
    // Task 3 this.handlePasswordChange = this.handlePasswordChange.bind(this);
    // Task 7 this.idChangeSubscribe = this.idChangeSubscribe.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  // Task 3
  // handleUserIdChange(event) {
  //
  // }
  //
  // handlePasswordChange(event) {
  //
  // }

  // this method is for listener to add themselves to the list so that
  // they will get notified when the user ID has changed

  // Task 7
  // idChangeSubscribe(listener) {
  //   console.log("UserManager.idChangeSubscribe()");
  //   this.idChangeListeners.push(listener);
  //   console.log(this.idChangeListeners);
  // }

  logIn() {

    // Task 2

    // Task 3
    // let userIdEntered = this.state.userIdFieldValue;
    // let passwordEntered = this.state.passwordFieldValue;
    //
    // let successful = false;
    // let userName = "unknown";
    //
    // // Simulated database lookup!!! We would not do this in real life!
    //
    // if (userIdEntered.trim() === "harry" && passwordEntered.trim() === "12345") {
    //   userName = "Harry Kong";
    //   successful = true;
    // }
    //
    // if (userIdEntered.trim() === "jenny" && passwordEntered.trim() === "12345") {
    //   userName = "Jenny Luz";
    //   successful = true;
    // }
    //
    // // Was the log in successful?
    //
    // if (successful) {
    //   this.setState( { loggedIn: true, userId: userIdEntered.trim(), userName: userName, instructions: "You can now comment on photos!" },
    //                   () => { this.props.logInCallback(this.state); } );
    // }
    // else {
    //   this.setState( { instructions: "Incorrect user ID or password. Try again." } );
    // }

  }

  logOut() {

    // Task 2

    // Task 3
    // this.setState( { instructions: "Please log in to comment on photos." } )
    // this.setState( { loggedIn: false } );
    // Task 3 this.setState( { loggedIn: false, userId: "", userName: "", userIdFieldValue: "", passwordFieldValue: "" }, () => { this.props.logInCallback(this.state); } );
  }

  render() {
    // Task 2
    if (true) {
        // logged in
        return (
          <div className="user-manager-block user-manager-block-active-background">
            <p>Logged in as: { /* Task 3: state attribute: userName */ }&nbsp;<input className="button" type="button" value="Log Out" onClick={this.logOut} /></p>
            { /* Task 4 */ }
            { /* Task 3: state attribute instructions */ }
          </div>
        );
    }
    else {
        // logged Out
        return (
          <div className="user-manager-block user-manager-block-inactive-background">
            <p>user ID:&nbsp;<input type="text" onChange={this.handleUserIdChange}/>&nbsp;
            password:&nbsp;<input type="text" onChange={this.handlePasswordChange}/>&nbsp;
            <input className="button" type="button" value="Log In" onClick={this.logIn} /></p>
            { /* Task 4 */ }
            { /* Task 3: state attribute instructions */ }
          </div>
        );
    }
  }

}

export default UserManager;
