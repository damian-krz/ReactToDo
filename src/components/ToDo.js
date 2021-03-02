import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class ToDo extends Component { 
    state = { 
        tasks: [
            {
                id: 0,
                text: 'zagrać w CSa',
                date: '2021-04-01',
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 1,
                text: 'zrobić kanapki',
                date: '2021-04-02',
                important: false,
                active: true,
                finishDate: null
            }
        ]
     };
    counter = this.state.tasks.length;

    changeTaskStatus = (id) => {
        let tasks = [...this.state.tasks];
        tasks.map(task => {
            if(task.id === id) {
                task.active = false;
                task.finishDate = new Date().getTime();
            }
        });
        this.setState({
            tasks
        });
    };
    
    deleteTask = (id) => {
        let tasks = [...this.state.tasks];
        let index = tasks.findIndex(task => task.id === id);
        tasks.splice(index, 1);
        this.setState({
            tasks
        })
    };

    addTask = (text, date, important) => {
      const task = {
            id: this.counter,
            text,
            date,
            important,
            active: true,
            finishDate: null
        }
        this.counter++;
        console.log(task);
        
        this.setState(prevState => ({
            tasks: [...prevState.tasks, task]
        }));
        return true;
    }

    render() { 
        return (  
            <div>
                TODO APP
                <AddTask add={this.addTask}/>
                <TaskList tasks={this.state.tasks} change={this.changeTaskStatus} delete={this.deleteTask}/>
            </div>
        );
    };
};
 
export default ToDo;