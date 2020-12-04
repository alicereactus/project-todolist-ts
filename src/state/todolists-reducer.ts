import { v1 } from "uuid";
import { FilterValuesType, TodoListType } from "../App";

export type ActionType = 
RemoveTodoListActionType
| AddTodoListActionType
| ChangeTodoListTitleActionType
| ChangeTodoListFilterActionType

export type RemoveTodoListActionType = {
    type: 'REMOVE-TODOLIST' 
    id: string
}

export type AddTodoListActionType = {
    type: 'ADD-TODOLIST'
    title: string
}

export type ChangeTodoListTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}

export type ChangeTodoListFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: FilterValuesType
}

export const todolistsReducer = (state: Array<TodoListType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id);
        case 'ADD-TODOLIST':
            const newTodoListID = v1()
            const newTodoList: TodoListType = {
                id: newTodoListID,
                title: action.title,
                filter: 'all'
            }
            return [...state, newTodoList]
        case 'CHANGE-TODOLIST-TITLE': {
            const todoList = state.find(tl => tl.id === action.id)
            if (todoList) {
                todoList.title = action.title
                return [...state]
            }
            return state
        }
        case 'CHANGE-TODOLIST-FILTER': {
            const todoList = state.find(tl => tl.id === action.id)
            if (todoList) {
                todoList.filter = action.filter
                return [...state]
            }
            return state
        }
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTodoListAC = (todoListID: string): RemoveTodoListActionType => ({
    type: 'REMOVE-TODOLIST',
    id: todoListID
})

export const addTodoListAC = (newTodoListTitle: string): AddTodoListActionType => ({
    type: 'ADD-TODOLIST',
    title: newTodoListTitle
})

export const changeTodoListTitleAC = (todoListID: string, newTodoListTitle: string): ChangeTodoListTitleActionType => ({
    type: 'CHANGE-TODOLIST-TITLE',
    id: todoListID,
    title: newTodoListTitle
})

export const changeTodoListFilterActionTypeAC = (todoListID: string, newTodoListFilter: FilterValuesType): ChangeTodoListFilterActionType => ({
    type: 'CHANGE-TODOLIST-FILTER',
    id: todoListID,
    filter: newTodoListFilter
})