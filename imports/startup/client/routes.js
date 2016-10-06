import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';


import App from '../../ui/pages/App.jsx';
import Login from '../../ui/pages/Login.jsx';
import Register from '../../ui/pages/Register.jsx';
import TimeCounting from '../../ui/pages/TimeCounting.jsx';

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

FlowRouter.route('/counting', {
  action(){
    mount(TimeCounting);
  }
})
