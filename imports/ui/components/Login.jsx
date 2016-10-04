import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import EmailPasswordForm from './EmailPasswordForm.jsx';

export default class Login extends React.Component {
    constructor() {
        super();
    }

    loginWithPassword(e) {
        e.preventDefault();
        const email = $('#email').val();
        const password = $('#password').val().trim();

        Meteor.loginWithPassword(email, password, (err) => {
            if (err)
                console.log('there was an error: ' + err.reason);
            else {
                FlowRouter.go('/');
            }
        })
    }

    loginWithFacebook() {
        Meteor.loginWithFacebook({
            requestPermissions: ['user_friends', 'public_profile', 'email']
        }, err => {
            if (err)
                //throw new Meteor.Error('Facebook login failed');
                console.log('facebook login failed, ', err);
                else {
                    FlowRouter.go('/');
                }
            }
        )
    }

    loginWithGoogle(){
      Meteor.loginWithGoogle({
        // requestPermissions: ['profile', 'email']
      }, err => {
        if(err)
          console.log('google login faild. ', err);
          else {
            FlowRouter.go('/')
          }
      })
    }

    render() {
        return (
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h1>Login</h1>
                    <EmailPasswordForm submitBtnLabel="Login" onSubmitHandle={this.loginWithPassword.bind(this)}/>
                    <p>Don't have an account ?
                        <a href="/register">
                            <span class="glyphicon glyphicon-user"></span>
                            Register</a>
                    </p>
                    <button class='btn btn-primary' onClick={this.loginWithFacebook.bind(this)}>Login via Facebook</button>
                    <button class='btn btn-primary' onClick={this.loginWithGoogle.bind(this)}>Login via Google</button>
                </div>
            </div>
        )
    }
}
