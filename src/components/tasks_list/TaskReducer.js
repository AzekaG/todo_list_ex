import { nanoid } from 'nanoid';
import React from 'react';

export const TaskReducer = (state, action) => {
    switch (action.type) {
        case 'create':
            
            return [...state, {
                id: nanoid(),
                title: action.payload,
                goals: [],
                done: false
            }]
        case 'remove':
           
            
            return state.filter(item => item.id !== action.payload);

        case 'update':
           
            
            return state.map((task) => {
                return task.id === action.payload.id ? { ...task, title: action.payload.title, goals: action.payload.goals } : task;
            })

        case 'removeAll':
            return []

        case 'changeDone':
           
            return state.map((task) => {
                return task.id === action.payload ? { ...task, done: !task.done } : task;
            })


        case 'restore':
            return action.payload;



        //проблема здесь
        case 'updateGoal':

            return state.map((task) => {
                return task.id === action.payload.id ? {
                    ...task, goals: action.payload.goals
                } : task
            })



        default:
            return state;
    }
}

export default TaskReducer;
