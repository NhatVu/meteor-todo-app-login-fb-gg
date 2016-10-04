import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class PostTask extends React.Component {
    constructor() {
        super();
        this.state = {
            term: ''
        }
    }

    onChangeHandle(e) {
        this.setState({term: e.target.value})
    }

    onSubmitHandle(e){
      e.preventDefault();
      Meteor.call('tasks.insert', this.state.term);
      this.setState({
        term: '',
      })
    }

    render() {
        return (
            <form class='new-task' onSubmit={this.onSubmitHandle.bind(this)}>
                <input type="text" placeholder="Add new task..."
                value={this.state.term} onChange={this.onChangeHandle.bind(this)}/>
            </form>
        )
    }
}
