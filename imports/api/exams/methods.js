import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Exams } from './exams.js';
import { FlowRouter } from 'meteor/kadira:flow-router'
Meteor.methods({
  'exams.insert'(time){
    check(time, Number);
    Exams.insert({
      countdown: time,
    })
  },
  'exams.update'(timeId, time){
    check(timeId, String);
    check(time, Number);

    Exams.update(timeId, {
      $set: {
        countdown: time,
      }
    })
  },
  'exams.setCountTime'(timeId){
    check(timeId, String);
    const interval = 1000;
    let timeInterval = Meteor.setInterval(()=> {
    const time = Exams.findOne({_id: timeId});
    const a = time.countdown - interval/1000;
    if(a <= 0){
      Meteor.clearInterval(timeInterval);
      FlowRouter.go('/')
    }
      Exams.update(timeId, {
        $set: {
          countdown: a,
        }
      })
    }, interval)
  }
})
