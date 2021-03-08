import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { v1 } from 'uuid';
import { TaskPriorities, TaskStatuses } from '../../api/todolists-api';
import { AppRootStateType } from '../../app/store';
import { tasksReducer } from '../../features/TodolistsList/tasks-reducer';
import { todolistsReducer } from '../../features/TodolistsList/todolists-reducer';


const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})

const initialGlobalState: AppRootStateType = {
    todolists: [
        {
            id: "todolistId1", title: "What to learn", filter: "all", addedDate: '',
            order: 0
        },
        {
            id: "todolistId2", title: "What to buy", filter: "all", addedDate: '',
            order: 0
        }
    ],
    tasks: {
        ["todolistId1"]: [
            {
                description: '', title: "HTML&CSS", status: TaskStatuses.Completed,
                priority: TaskPriorities.High, startDate: '', deadline: '',
                id: v1(), todoListId: 'todoListID1', order: 0, addedDate: ''
            },
            {
                description: '', title: "JS", status: TaskStatuses.Completed,
                priority: TaskPriorities.High, startDate: '', deadline: '',
                id: v1(), todoListId: 'todoListID1', order: 0, addedDate: ''
            }
        ],
        ["todolistId2"]: [
            {
                description: '', title: "Milk", status: TaskStatuses.Completed,
                priority: TaskPriorities.High, startDate: '', deadline: '',
                id: v1(), todoListId: 'todoListID2', order: 0, addedDate: ''
            },
            {
                description: '', title: "React Book", status: TaskStatuses.Completed,
                priority: TaskPriorities.High, startDate: '', deadline: '',
                id: v1(), todoListId: 'todoListID2', order: 0, addedDate: ''
            }
        ]
    }
}

export const storyBookStore = createStore(rootReducer, initialGlobalState, applyMiddleware(thunk));

export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider store={storyBookStore}>{storyFn()}</Provider>)
