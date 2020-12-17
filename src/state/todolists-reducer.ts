import { v1 } from "uuid";

import { FilterValuesType, TodoListType } from "../App";

export type ActionType =
  RemoveTodoListActionType
  | AddTodoListActionType
  | ChangeTodoListFilterActionType
  | ChangeTodoListTitleActionType

export type RemoveTodoListActionType = {
  type: 'REMOVE-TODOLIST'
  id: string
}

export type AddTodoListActionType = {
  type: 'ADD-TODOLIST'
  title: string
  todoListID: string
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

let initialState: Array<TodoListType> = []

export const todolistsReducer = (state: Array<TodoListType> = initialState, action: ActionType) => {
  switch (action.type) {
    case 'REMOVE-TODOLIST':
      return state.filter(tl => tl.id !== action.id);
    case 'ADD-TODOLIST':
      const newTodoList: TodoListType = {
        id: action.todoListID,
        title: action.title,
        filter: 'all'
      }
      return [...state, newTodoList]
    case 'CHANGE-TODOLIST-TITLE': {
      const todoList = state.find(tl => tl.id === action.id)
      if (todoList) {
        todoList.title = action.title
      }
      return [...state]
    }
    case 'CHANGE-TODOLIST-FILTER': {
      const todoList = state.find(tl => tl.id === action.id)
      if (todoList) {
        todoList.filter = action.filter
      }
      return [...state]
    }
    default:
      return state
  }
}

export const removeTodoListAC = (todoListID: string): RemoveTodoListActionType => ({
  type: 'REMOVE-TODOLIST',
  id: todoListID
})

export const addTodoListAC = (newTodoListTitle: string): AddTodoListActionType => ({
  type: 'ADD-TODOLIST',
  title: newTodoListTitle,
  todoListID: v1()
})

export const changeTodoListTitleAC = (todoListID: string, newTodoListTitle: string): ChangeTodoListTitleActionType => ({
  type: 'CHANGE-TODOLIST-TITLE',
  id: todoListID,
  title: newTodoListTitle
})

export const changeTodoListFilterActionTypeAC = (newTodoListFilter: FilterValuesType, todoListID: string): ChangeTodoListFilterActionType => ({
  type: 'CHANGE-TODOLIST-FILTER',
  id: todoListID,
  filter: newTodoListFilter
})