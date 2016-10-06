import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Tasks} from '../../api/tasks/tasks.js';

import PostTask from '../components/PostTask';
import Task from '../components/Task.jsx';
import AppHeader from '../components/AppHeader.jsx'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            hideCompleted: false
        }
    }

    toggleHideCompleted() {
        this.setState({
            hideCompleted: !this.state.hideCompleted
        })
    }

    renderTasks() {
        let filterTasks = this.props.tasks;
        if (this.state.hideCompleted)
            filterTasks = filterTasks.filter(task => !task.checked)
        return filterTasks.map((task) => {
          const userId = this.props.user && this.props.user._id;
          const showPrivateButton = task.owner === userId;
          return (<Task key={task._id} task={task} showPrivateButton={showPrivateButton}/>);
        })
    }

    showUserNav() {
        if (this.props.user) {
            // if user logged in this.props.user.emails[0].address ||
            const username =  this.props.user.initials.name;
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                        role="button" aria-haspopup="true" aria-expanded="false">{username}
                            <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="/profile">My Profile</a>
                            </li>
                            <li>
                                <a href="/logout">Sign out</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            )
        } else
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="/login">
                            <span class="glyphicon glyphicon-log-in"></span>
                            Login</a>
                    </li>
                    <li>
                        <a href="/register">
                            <span class="glyphicon glyphicon-user"></span>
                            Register</a>
                    </li>
                </ul>
            )
    }

    render() {
        return (
            <div>
                <AppHeader appTitle="Meteor React Todo App" userNav={this.showUserNav()}/>
                <div class="container content">
                    <div class="header-control">
                        <h1>Todo List({this.props.incompleteCount})</h1>
                        <label class="hide-completed">
                            <input type="checkbox" readOnly checked={this.state.hideCompleted} onClick={this.toggleHideCompleted.bind(this)}/>
                            Hide Completed
                        </label>
                        <PostTask/>
                    </div>

                    <ul>
                        {this.renderTasks()}
                    </ul>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    tasks: React.PropTypes.array.isRequired,
    user: React.PropTypes.object,
    incompleteCount: React.PropTypes.number.isRequired,
}

export default createContainer(() => {
    Meteor.subscribe('tasks');
    return {
        user: Meteor.user(),
        tasks: Tasks.find({}, {
            sort: {
                createdAt: -1
            }
        }).fetch(),
        incompleteCount: Tasks.find({
            checked: {
                $ne: true
            }
        }).count()
    }
}, App);
