import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';


import App from '../../ui/components/App.jsx';
import Login from '../../ui/components/Login.jsx';
import Register from '../../ui/components/Register.jsx';

FlowRouter.route('/', {
  action(){
    mount(App)
  }
});

FlowRouter.route('/login', {
  action(){
    mount(Login)
  }
});

FlowRouter.route('/register', {
  action(){
    mount(Register)
  }
})

FlowRouter.route('/logout', {
  action(){
    Meteor.logout((err) => {
      if(err)
        console.log('logout error: ', err.reason);
        else {
          FlowRouter.go('/');
          sAlert.info("You've been signed out. ", {effect: 'stackslide', position: 'top-right', timeout: 2000,});
        }
    })
  }
})
