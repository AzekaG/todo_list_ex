import React, { useContext, useEffect, useReducer } from 'react';
import Task from './task';
import TaskItem from './task-item';
import TaskReducer from './TaskReducer';
import { TaskContext } from '../context/TaskContext';

const TaskList = () => {

    const { taskList, dispatch, addTask, removeTask, updateTask } = useContext(TaskContext);

    return (
        <div>
            <Task addTask={addTask}></Task>
            {taskList.map((task) => <TaskItem key={task.id} {...task} removeTask={removeTask} />)}

        </div>
    );
}

export default TaskList;
