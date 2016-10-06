import React from 'react';
import ReactDOM from 'react-dom';
import {
    Meteor
} from 'meteor/meteor';
import '/imports/startup/client/index.js';

Meteor.startup(() => {
    //ReactDOM.render(<App/>, document.getElementById('render-target'));
    // log sent messages
    // var _send = Meteor.connection._send;
    // Meteor.connection._send = function(obj) {
    //     console.log("send", obj);
    //     _send.call(this, obj);
    // };
    //
    // // log received messages
    // Meteor.connection._stream.on('message', function(message) {
    //     console.log("receive", JSON.parse(message));
    // });
});
