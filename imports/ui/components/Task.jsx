import React from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

export default class Task extends React.Component{
  constructor(props){
    super(props);
  }

  toggleChecked(e){
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }
  deleteTask(){
    Meteor.call('tasks.remove', this.props.task._id)
  }

  togglePrivate(e){
    Meteor.call('tasks.setPrivate', this.props.task._id, !this.props.task.private);
  }
  render(){
    const taskClassName = classnames({
      'task-item': true,
      checked: this.props.task.checked,
      private: this.props.task.private,
    })
    return (
      <li class={taskClassName}>
        <button className='delete' onClick={this.deleteTask.bind(this)}>&times;</button>
        <input
        type="checkbox"
        readOnly
        checked={this.props.task.checked}
        onChange={this.toggleChecked.bind(this)}
      />
      {
        this.props.showPrivateButton ? (
          <button className='toggle-private' onClick={this.togglePrivate.bind(this)}>
          {this.props.task.private ? 'Private' : 'Public'}
          </button>
        ): ''
      }
        <span className="text"><strong>{this.props.task.username}</strong>: {this.props.task.text}</span>
      </li>
    )
  }
}

Task.propTypes = {
  task: React.PropTypes.object.isRequired,
  // _id
}
