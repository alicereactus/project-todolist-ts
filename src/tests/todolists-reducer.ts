import { v1 } from "uuid";

export type ActionType =
  RemoveTodoListActionType
  | AddTodoListActionType
  | ChangeTodoListFilterActionType
  | ChangeTodoListTitleActionType

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
  id: string
  title: string
  filter: FilterValuesType
}

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

let initialState: Array<TodolistType> = []

export const todolistsReducer = (state: Array<TodolistType> = initialState, action: ActionType) => {
  switch (action.type) {
    case 'REMOVE-TODOLIST':
      return state.filter(tl => tl.id !== action.id);
    case 'ADD-TODOLIST':
      const newTodoList: TodolistType = {
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

export const changeTodoListFilterActionTypeAC = (todoListID: string, newTodoListFilter: FilterValuesType): ChangeTodoListFilterActionType => ({
  type: 'CHANGE-TODOLIST-FILTER',
  id: todoListID,
  filter: newTodoListFilter
})