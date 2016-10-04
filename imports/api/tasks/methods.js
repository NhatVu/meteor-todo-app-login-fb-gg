import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Tasks } from './tasks.js';

Meteor.methods({
  'tasks.insert'(text){
    check(text, String);
    text = parseInt(text);
    console.log(text, 'type of text: ', typeof text);
    if(!this.userId)
      throw new Meteor.Error('not-authorized');
    const insertObject = {
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).profile.name,
    }
    console.log('=== aaa ===')
    console.log(insertObject)
    Tasks.insert(insertObject, {
      autoConvert: false,
    });
  },

  'tasks.remove'(taskId){
    check(taskId, String);
    const task = Tasks.findOne(taskId);
    if(task.owner !== this.userId)
      throw new Meteor.Error('not-authorized');
    Tasks.remove(taskId);
  },

  'tasks.setChecked'(taskId, checked){
    check(taskId, String);
    check(checked, Boolean);

    const task = Tasks.findOne(taskId);
    if(task.owner !== this.userId)
      throw new Meteor.Error('not-authorized');
    Tasks.update(taskId, {
      $set: {
        checked: checked,
      }
    })
  },

  'tasks.setPrivate'(taskId, setToPrivate){
    check(taskId, String);
    check(setToPrivate, Boolean);

    const task = Tasks.findOne(taskId);
    if(task.owner !== this.userId)
      throw new Meteor.Error('not-authorized');
    Tasks.update(taskId, {
      $set: {
        private: setToPrivate,
      }
    })
  }

})
