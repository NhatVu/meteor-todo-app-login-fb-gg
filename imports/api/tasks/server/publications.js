import { Meteor } from 'meteor/meteor';
import { Tasks } from '../tasks.js';

// only fetch tasks that are public or belong to the current user
Meteor.publish('tasks', function(){
  const userId = this.userId;
  return Tasks.find({
    $or: [
      {private: {$ne: true}},
      {owner: userId},
    ],
  });
});

Meteor.publish(null, function() {
  const userId = this.userId
  const nguyen = Meteor.users.find({_id: userId}, {services: 1})
  return nguyen
})
