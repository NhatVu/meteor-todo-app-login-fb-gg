import React from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router'

export default class AppHeader extends React.Component {
    constructor() {
        super();
    }

    logout(){
      Meteor.logout(err => {
        if(err)
          console.log('logout error: ', err.reason);
        else {
          FlowRouter.go('/');
        }
      })
    }

    render() {
        return (
            <nav class="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand">{this.props.appTitle}</a>
                    </div>
                    {/* <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a>
                        </li>
                        <li>
                            <a href="/register"><span class="glyphicon glyphicon-user"></span> Register</a>
                        </li>
                        <li><button onClick={this.logout.bind(this)}>Log out</button></li>
                    </ul> */}
                    {this.props.userNav}
                </div>
            </nav>

        )
    }
}

AppHeader.getDefaultProps = {
    appTitle: "App Title",
    userNav: null,
}
