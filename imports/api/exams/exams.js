import { Mongo } from 'meteor/mongo';

export const Exams = new Mongo.Collection('exams');
const ExamsSchema = new SimpleSchema({
  countdown: {type: Number}
})

Exams.attachSchema(ExamsSchema);
