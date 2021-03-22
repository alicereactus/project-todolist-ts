import { v1 } from "uuid";
import { AddTodoListActionType, RemoveTodoListActionType } from "./todolists-reducer";

export type ActionType =
    RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType
    | RemoveTodoListActionType
    | AddTodoListActionType

type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}

export type TaskStateType = {
    [key: string]: Array<TaskType>
}

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskID: string
    todoListID: string
}

export type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todoListID: string
}

export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    todoListID: string
    taskID: string
    isDone: boolean
}

export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    todoListID: string
    taskID: string
    title: string
}

let initialState: TaskStateType = {}

export const tasksReducer = (state: TaskStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            const stateCopy = { ...state };
            const tasks = stateCopy[action.todoListID];
            const filteredTasks = tasks.filter(t => t.id !== action.taskID)
            stateCopy[action.todoListID] = filteredTasks;
            return stateCopy;
        }
        case 'ADD-TASK': {
            const stateCopy = { ...state };
            const tasks = stateCopy[action.todoListID];
            const newTask = { id: v1(), title: action.title, isDone: false };
            const newTasks = [newTask, ...tasks];
            stateCopy[action.todoListID] = newTasks;
            return stateCopy;
        }
        case 'CHANGE-TASK-STATUS': {
            return ({
                ...state,
                [action.todoListID]: state[action.todoListID].map(task => task.id === action.taskID ? { ...task, isDone: action.isDone } : task)
            });
        }
        case 'CHANGE-TASK-TITLE': {
            return ({
                ...state,
                [action.todoListID]: state[action.todoListID].map(task => task.id === action.taskID ? { ...task, title: action.title } : task)
            });;
        }
        case 'REMOVE-TODOLIST': {
            const stateCopy = { ...state };
            delete stateCopy[action.id]
            return stateCopy;
        }
        case 'ADD-TODOLIST': {
            const stateCopy = { ...state };

            stateCopy[action.todoListID] = [];

            return stateCopy;
        }
        default: return state
    }
}

export const removeTaskAC = (taskID: string, todoListID: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TASK', taskID, todoListID }
}

export const addTaskAC = (title: string, todoListID: string): AddTaskActionType => {
    return { type: 'ADD-TASK', title, todoListID }
}

export const changeTaskStatusAC = (todoListID: string, taskID: string, isDone: boolean): ChangeTaskStatusActionType => {
    return { type: 'CHANGE-TASK-STATUS', todoListID, taskID, isDone }
}

export const changeTaskTitleAC = (todoListID: string, taskID: string, title: string): ChangeTaskTitleActionType => {
    return { type: 'CHANGE-TASK-TITLE', todoListID, taskID, title }
}