// import React, { useState } from 'react';
// import { v1 } from 'uuid';

// import { AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@material-ui/core';
// import { Menu } from '@material-ui/icons';

// import TodoList from './TodoList';
// import AddItemForm from './AddItemForm';

// import './App.css';

// export type TaskType = {
//   id: string
//   title: string
//   isDone: boolean
// }

// export type FilterValuesType = 'all' | 'active' | 'completed'

// export type TodoListType = {
//   id: string
//   title: string
//   filter: FilterValuesType
// }

// export type TaskStateType = {
//   [key: string]: Array<TaskType>
// }

// function AppWithReducers() {
//   const todoListID1 = v1()
//   const todoListID2 = v1()

//   const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
//     { id: todoListID1, title: 'What to learn', filter: 'all' },
//     { id: todoListID2, title: 'What to buy', filter: 'all' }
//   ])

//   const [tasks, setTasks] = useState<TaskStateType>({
//     [todoListID1]: [
//       { id: v1(), title: 'React', isDone: false },
//       { id: v1(), title: 'HTML', isDone: true },
//       { id: v1(), title: 'CSS', isDone: true },
//       { id: v1(), title: 'Rest API', isDone: false },
//       { id: v1(), title: 'Graph QL', isDone: true },
//     ],
//     [todoListID2]: [
//       { id: v1(), title: 'Хлеб', isDone: false },
//       { id: v1(), title: 'Молоко', isDone: true },
//       { id: v1(), title: 'Яйца', isDone: true },
//       { id: v1(), title: 'Мясо', isDone: false },
//       { id: v1(), title: 'Вкусняшки', isDone: true },
//     ]
//   })

//   // CRUD
//   // -Create
//   // -Update
//   // -Read
//   // -Delete

//   function removeTask(taskID: string, todoListID: string) {
//     const todoListTasks = tasks[todoListID]
//     tasks[todoListID] = todoListTasks.filter(task => task.id !== taskID)
//     setTasks({ ...tasks })
//   }

//   function addTask(title: string, todoListID: string) {
//     const newTask: TaskType = { id: v1(), title: title, isDone: false }
//     const todoListTasks = tasks[todoListID]
//     tasks[todoListID] = [newTask, ...todoListTasks]
//     setTasks({ ...tasks })
//   }

//   function changeFilter(newFilterValue: FilterValuesType, todoListID: string) {
//     const todoList = todoLists.find(tl => tl.id === todoListID)
//     if (todoList) {
//       todoList.filter = newFilterValue
//       setTodoLists([...todoLists])
//     }
//   }

//   function changeTodolistTitle(title: string, todoListID: string) {
//     const todoList = todoLists.find(tl => tl.id === todoListID)
//     if (todoList) {
//       todoList.title = title
//       setTodoLists([...todoLists])
//     }
//   }

//   function changeTaskStatus(taskID: string, isDone: boolean, todoListID: string) {
//     const todoListTasks = tasks[todoListID]
//     const task: TaskType | undefined = todoListTasks.find(task => task.id === taskID)
//     if (task) {
//       task.isDone = isDone
//       setTasks({ ...tasks })
//     }
//   }

//   function changeTaskTitle(taskID: string, title: string, todoListID: string) {
//     const todoListTasks = tasks[todoListID]
//     const task: TaskType | undefined = todoListTasks.find(task => task.id === taskID)
//     if (task) {
//       task.title = title
//       setTasks({ ...tasks })
//     }
//   }

//   function removeTodoList(todoListID: string) {
//     const filteredTodoLists = todoLists.filter(tl => tl.id !== todoListID)
//     delete tasks[todoListID]
//     setTodoLists(filteredTodoLists)
//     setTasks({ ...tasks })
//   }

//   function addTodolistItem(title: string) {
//     const newTodoListID = v1()
//     const newTodoList: TodoListType = {
//       id: newTodoListID,
//       title: title,
//       filter: 'all'
//     }
//     setTodoLists([...todoLists, newTodoList])
//     setTasks({ ...tasks, [newTodoListID]: [] })
//   }

//   // setTasks(tasks.map(task => {
//   //   if (task.id === taskID) {
//   //     return {...task, isDone: isDone}
//   //   }
//   //   return task
//   // }))

//   // function taskFilter () {
//   //   let tasksForTodoList = tasks
//   //   if (filter === 'active') {
//   //     tasksForTodoList = tasks.filter(task => task.isDone === false)
//   //   }
//   //   if (filter === 'completed') {
//   //     tasksForTodoList = tasks.filter(task => task.isDone === true)
//   //   }
//   //   return tasksForTodoList
//   // }
//   return (
//     <div className="App">
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu">
//             <Menu />
//           </IconButton>
//           <Typography variant="h6">
//             News
//                     </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>

//       <Container fixed>
//         <Grid container style={{ padding: '20px' }}>
//           <AddItemForm addItem={addTodolistItem} />
//         </Grid>
//         <Grid container spacing={3}>
//           {
//             todoLists.map(tl => {
//               let tasksForTodoList = tasks[tl.id]
//               if (tl.filter === 'active') {
//                 tasksForTodoList = tasks[tl.id].filter(task => task.isDone === false)
//               }
//               if (tl.filter === 'completed') {
//                 tasksForTodoList = tasks[tl.id].filter(task => task.isDone === true)
//               }
//               return (
//                 <Grid item>
//                   <Paper style={{ padding: '10px' }}>
//                     <TodoList
//                       key={tl.id}
//                       id={tl.id}
//                       title={tl.title}
//                       tasks={tasksForTodoList}
//                       filter={tl.filter}
//                       addTask={addTask}
//                       removeTask={removeTask}
//                       changeFilter={changeFilter}
//                       changeTaskStatus={changeTaskStatus}
//                       removeTodoList={removeTodoList}
//                       changeTaskTitle={changeTaskTitle}
//                       changeTodolistTitle={changeTodolistTitle} />
//                   </Paper>
//                 </Grid>
//               )
//             }
//             )
//           }
//         </Grid>
//       </Container>
//     </div>
//   );
// }

// export default AppWithReducers;

export default ()=>{};