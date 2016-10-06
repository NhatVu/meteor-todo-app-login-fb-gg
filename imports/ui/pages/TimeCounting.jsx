import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import { Exams } from '/imports/api/exams/exams.js'

class TimeCounting extends React.Component {
    constructor() {
        super();
        this.state = {
          timeInput: ''
        }
    }

    onChangeHandle(e){
      this.setState({
        timeInput : e.target.value,
      })
    }

    onSubmitHandle(e){
      e.preventDefault();
      const tmp = parseInt(this.state.timeInput);
      Meteor.call('exams.update', this.props.exams[0]._id, tmp);
      this.setState({
        timeInput: '',
      })
    }

    onStartTestHandle(){
      Meteor.call('exams.setCountTime',this.props.exams[0]._id);
    }
    render() {
      if(this.props.exams.length > 0 && this.props.exams[0].countdown <= 0){
       FlowRouter.go('/')

      }
        return (
            <div>
                <h1>Time Counting</h1>
                <form onSubmit={this.onSubmitHandle.bind(this)}>
                  <input type="number" placeholder='update countdown'
                  onChange={this.onChangeHandle.bind(this)} value={this.state.timeInput}/>
                </form>
                <br/>
                {this.props.exams.length > 0 ?
                <div class='clock'>{this.props.exams[0].countdown}</div> : ''}
                <button class='btn btn-primary' onClick={this.onStartTestHandle.bind(this)}>Start Test</button>
            </div>

        )
    }
}

TimeCounting.propTypes = {
    exams: React.PropTypes.array,
}

export default createContainer(() => {
    Meteor.subscribe('timeCounting');
    return {
        exams: Exams.find({}).fetch()
    }
}, TimeCounting)
