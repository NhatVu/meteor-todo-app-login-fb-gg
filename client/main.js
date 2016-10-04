import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import '/imports/startup/client/index.js';


import App from '../imports/ui/components/App.jsx';

Meteor.startup(() => {
  //ReactDOM.render(<App/>, document.getElementById('render-target'));

});
