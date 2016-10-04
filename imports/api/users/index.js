import { Accounts } from 'meteor/accounts-base';
if(Meteor.isServer){

Accounts.onCreateUser((option, user) => {
  console.log('user', user);
  console.log('option', option);
  const name = option.profile.name;
  user.initials = {name: name};
  console.log(user);
  return user;
})
}
