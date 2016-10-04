import React from 'react';
import EmailPasswordForm from './EmailPasswordForm.jsx';
import {Accounts} from 'meteor/accounts-base';

export default class Register extends React.Component {
    constructor() {
        super();
    }

    onSubmitHandle(e) {
        e.preventDefault();
        const email = jQuery('#email').val();
        const password = jQuery('#password').val().trim();
        const profile = {};
        profile.name = jQuery('#name').val();
        Accounts.createUser({
            email: email,
            password: password,
            profile: profile
        }, (err) => {
            if (err)
                console.log('there was an error: ' + error.reason)
            else {
                FlowRouter.go('/');
            }
        })
    }

    render() {
        return (
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h1>Register</h1>
                    <form  class="form-horizontal" onSubmit={this.onSubmitHandle.bind(this)}>
                        <div class="form-group">
                            <label>Name:
                                <input type="text" id="name" placeholder="Name" className='form-control'/></label>
                        </div>
                        <div class="form-group">
                            <label>Email:
                                <input type="email" id="email" placeholder="Email" className='form-control'/></label>
                        </div>
                        <div class="form-group">
                            <label>Password:
                                <input type="password" id="password" placeholder="Password" className='form-control'/></label>
                        </div>

                        <div class="form-group">
                            <label>You are:
                            <select id="roles" class='form-control'>
                                <option value="developer">Developer</option>
                                <option value="manager">Manager</option>
                                <option value="tester">Tester</option>
                            </select></label>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary" type="submit">Register</button>
                        </div>
                    </form>
                    <p>Already have an account?
                        <a href="/login">
                            <span class="glyphicon glyphicon-log-in"></span>Sign in</a>
                    </p>
                </div>
            </div>
        )
    }
}
