import { Accounts } from 'meteor/accounts-base';
if(Meteor.isServer){

Accounts.onCreateUser((option, user) => {
  const name = option.profile.name;
  user.initials = {name: name};
  return user;
})
}
