import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks/index.js';
import { Accounts } from 'meteor/accounts-base'
import '../imports/api/users/index.js';
// import '../imports/startup/server/accounts-config.js'
Meteor.startup(() => {
    // code to run on server at startup
    // first, remove configuration entry in case service is already configured
    // Accounts.loginServiceConfiguration.remove({
    //   service: "facebook"
    // });
    // Accounts.loginServiceConfiguration.insert({
    //   service: "facebook",
    //   appId: "596035807247415",
    //   secret: "c52acccd46bc0e48f51e714449c32e4b"
    // });
    ServiceConfiguration.configurations.upsert({
        service: "facebook"
    }, {
        $set: {
            appId: "596035807247415",
            loginStyle: "popup",
            secret: "c52acccd46bc0e48f51e714449c32e4b"
        }
    });


    ServiceConfiguration.configurations.upsert({
        service: 'google'
    }, {
        $set: {
            clientId: '758823803283-542kmqp341u77re9hi2vsjgu06ui0ns0.apps.googleusercontent.com',
            secret: 'BGQ9HdGDSESLnbEA0FdBhUk0',
            loginStyle: "popup"
        }
    });
});
