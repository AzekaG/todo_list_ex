import React, { useEffect, useReducer, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskReducer from '../tasks_list/TaskReducer';

const TaskProvider = ({ children }) => {
    const [taskList, dispatch] = useReducer(TaskReducer, []);

    const addTask = (title) => {
        dispatch({
            type: 'create',
            payload: title
        });
    }

    const removeTask = (id) => {
        dispatch({
            type: 'remove',
            payload: id,
        });
    }

    const updateTask = (task) => {
        dispatch({
            type: 'update',
            payload: task
        })
    }

    const updateGoal = (id, goals ) => {
        dispatch({
            type: 'updateGoal',
            payload: { id, goals }
        })
    }

    useEffect(() => {
        dispatch({
            type: 'restore',
            payload: JSON.parse(localStorage.getItem("taskList")) || taskList
        })
    }, []);

    useEffect(() => {
        
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }, [taskList])


    
   
    return (
        <TaskContext.Provider value={{ taskList, addTask, removeTask, updateTask, updateGoal }}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskProvider;
