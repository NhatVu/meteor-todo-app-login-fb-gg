import { Exams } from '../exams.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('timeCounting', function(){
  return Exams.find();
})
