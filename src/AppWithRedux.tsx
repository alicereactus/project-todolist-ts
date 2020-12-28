import React, { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux'

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

  const removeTask = useCallback((taskID: string, todoListID: string) => {
    const action = removeTaskAC(taskID, todoListID)
    dispatch(action)
  }, [dispatch])

  const addTask = useCallback((title: string, todoListID: string) => {
    const action = addTaskAC(title, todoListID)
    dispatch(action)
  }, [dispatch])

  const changeFilter = useCallback((filter: FilterValuesType, todoListID: string) => {
    const action = changeTodoListFilterActionTypeAC(filter, todoListID)
    dispatch(action)
  }, [dispatch])

  const changeTodolistTitle = useCallback((title: string, todoListID: string) => {
    const action = changeTodoListTitleAC(todoListID, title)
    dispatch(action)
  }, [dispatch])

  const changeTaskStatus = useCallback((taskID: string, isDone: boolean, todoListID: string) => {
    const action = changeTaskStatusAC(taskID, todoListID, isDone)
    dispatch(action)
  }, [dispatch])

  const changeTaskTitle = useCallback((taskID: string, title: string, todoListID: string) => {
    const action = changeTaskTitleAC(taskID, title, todoListID)
    dispatch(action)
  }, [dispatch])

  const removeTodoList = useCallback((todoListID: string) => {
    const action = removeTodoListAC(todoListID)
    dispatch(action)
  }, [dispatch])

  const addTodolistItem = useCallback((title: string) => {
    const action = addTodoListAC(title)
    dispatch(action)
  }, [dispatch])

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

              return (
                <Grid item key={tl.id} >
                  <Paper style={{ padding: '10px' }}>
                    <TodoList
                      id={tl.id}
                      title={tl.title}
                      tasks={tasksForTodolist}
                      filter={tl.filter}
                      _addTask={addTask}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      _changeTaskStatus={changeTaskStatus}
                      removeTodoList={removeTodoList}
                      changeTaskTitle={changeTaskTitle}
                      _changeTodolistTitle={changeTodolistTitle} />
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