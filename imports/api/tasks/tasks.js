import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');
const TasksSchema = new SimpleSchema({
    text: {
        type: String,
        label: 'task text'
    },
    createdAt: {
        type: Date,
        autoValue(){
          if(this.isInsert)
            return new Date;
        }
    },
    owner: {
        type: String
    },
    username: {
        type: String
    },
    check: {
        type: Boolean,
        autoValue(){
          if(this.isInsert)
            return false;
        }
    },
    private: {
        type: Boolean,
        optional: true
    }
});

TasksSchema.clean({
  autoConvert: false,
})
Tasks.attachSchema(TasksSchema);
