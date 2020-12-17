import React from 'react';

import {useSelector, useDispatch} from 'react-redux'

import { AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';


import { addTodoListAC, changeTodoListFilterActionTypeAC, changeTodoListTitleAC, removeTodoListAC } from './state/todolists-reducer';
import { addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from './state/task-reducer';
import { AppRootStateType } from './state/store';

import TodoList from './TodoList';
import AddItemForm from './AddItemForm';

import './App.css';

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

export type TodoListType = {
  id: string
  title: string
  filter: FilterValuesType
}

export type TaskStateType = {
  [key: string]: Array<TaskType>
}

function AppWithRedux() {
  const todoLists = useSelector<AppRootStateType, Array<TodoListType>>(state => state.todolists)
  const tasks = useSelector<AppRootStateType, TaskStateType>(state => state.tasks)

  const dispatch = useDispatch()

  // CRUD
  // -Create
  // -Update
  // -Read
  // -Delete

  function removeTask(taskID: string, todoListID: string) {
    const action = removeTaskAC(taskID, todoListID)
    dispatch(action)
  }

  function addTask(title: string, todoListID: string) {
    const action = addTaskAC(title, todoListID)
    dispatch(action)
  }

  function changeFilter(filter: FilterValuesType, todoListID: string) {
    const action = changeTodoListFilterActionTypeAC(filter, todoListID)
    dispatch(action)
  }

  function changeTodolistTitle(title: string, todoListID: string) {
    const action = changeTodoListTitleAC(todoListID, title)
    dispatch(action)
  }

  function changeTaskStatus(taskID: string, isDone: boolean, todoListID: string) {
    const action = changeTaskStatusAC(taskID, todoListID, isDone)
    dispatch(action)
  }

  function changeTaskTitle(taskID: string, title: string, todoListID: string) {
    const action = changeTaskTitleAC(taskID, title, todoListID)
    dispatch(action)
  }

  function removeTodoList(todoListID: string) {
    const action = removeTodoListAC(todoListID)
    dispatch(action)
  }

  function addTodolistItem(title: string) {
    const action = addTodoListAC(title)
    dispatch(action)
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">
            News
                    </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container fixed>
        <Grid container style={{ padding: '20px' }}>
          <AddItemForm addItem={addTodolistItem} />
        </Grid>
        <Grid container spacing={3}>
          {
            todoLists.map(tl => {
              let allTodolistTasks = tasks[tl.id];
              let tasksForTodolist = allTodolistTasks;
              // let tasksForTodoList = tasks[tl.id]
              if (tl.filter === 'active') {
                tasksForTodolist = allTodolistTasks.filter(task => task.isDone === false)
              }
              if (tl.filter === 'completed') {
                tasksForTodolist = allTodolistTasks.filter(task => task.isDone === true)
              }

              debugger
              return (
                <Grid item>
                  <Paper style={{ padding: '10px' }}>
                    <TodoList
                      key={tl.id}
                      id={tl.id}
                      title={tl.title}
                      tasks={tasksForTodolist}
                      filter={tl.filter}
                      addTask={addTask}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      changeTaskStatus={changeTaskStatus}
                      removeTodoList={removeTodoList}
                      changeTaskTitle={changeTaskTitle}
                      changeTodolistTitle={changeTodolistTitle} />
                  </Paper>
                </Grid>
              )
            }
            )
          }
        </Grid>
      </Container>
    </div>
  );
}

export default AppWithRedux;