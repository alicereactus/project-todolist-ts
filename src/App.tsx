import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v1 } from 'uuid';

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

type TodoListType = {
  id: string
  title: string
  filter: FilterValuesType
}

type TaskStateType = {
  [key: string]: Array<TaskType>
}

function App() {
  const todoListID1 = v1()
  const todoListID2 = v1()

  const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
    { id: todoListID1, title: 'What to learn', filter: 'all' },
    { id: todoListID2, title: 'What to buy', filter: 'all' }
  ])

  const [tasks, setTasks] = useState<TaskStateType>({
    [todoListID1]: [
      { id: v1(), title: 'React', isDone: false },
      { id: v1(), title: 'HTML', isDone: true },
      { id: v1(), title: 'CSS', isDone: true },
      { id: v1(), title: 'Rest API', isDone: false },
      { id: v1(), title: 'Graph QL', isDone: true },
    ],
    [todoListID2]: [
      { id: v1(), title: 'Хлеб', isDone: false },
      { id: v1(), title: 'Молоко', isDone: true },
      { id: v1(), title: 'Яйца', isDone: true },
      { id: v1(), title: 'Мясо', isDone: false },
      { id: v1(), title: 'Вкусняшки', isDone: true },
    ]
  })

  // CRUD
  // -Create
  // -Update
  // -Read
  // -Delete

  function removeTask(taskID: string, todoListID: string) {
    const todoListTasks = tasks[todoListID]
    tasks[todoListID] = todoListTasks.filter(task => task.id !== taskID)
    setTasks({ ...tasks })
  }

  function addTask(title: string, todoListID: string) {
    const newTask: TaskType = { id: v1(), title: title, isDone: false }
    const todoListTasks = tasks[todoListID]
    tasks[todoListID] = [newTask, ...todoListTasks]
    setTasks({ ...tasks })
  }

  function changeFilter(newFilterValue: FilterValuesType, todoListID: string) {
    const todoList = todoLists.find(tl => tl.id === todoListID)
    if (todoList) {
      todoList.filter = newFilterValue
      setTodoLists([...todoLists])
    }
  }

  function changeTaskStatus(taskID: string, isDone: boolean, todoListID: string) {
    const todoListTasks = tasks[todoListID]
    const task: TaskType | undefined = todoListTasks.find(task => task.id === taskID)
    if (task) {
      task.isDone = isDone
      setTasks({ ...tasks })
    }
  }

  function removeTodoList(todoListID: string) {
    const filteredTodoLists = todoLists.filter(tl => tl.id !== todoListID)
    delete tasks[todoListID]
    setTodoLists(filteredTodoLists)
    setTasks({ ...tasks })
  }

  // setTasks(tasks.map(task => {
  //   if (task.id === taskID) {
  //     return {...task, isDone: isDone}
  //   }
  //   return task
  // }))

  // function taskFilter () {
  //   let tasksForTodoList = tasks
  //   if (filter === 'active') {
  //     tasksForTodoList = tasks.filter(task => task.isDone === false)
  //   }
  //   if (filter === 'completed') {
  //     tasksForTodoList = tasks.filter(task => task.isDone === true)
  //   }
  //   return tasksForTodoList
  // }
  return (
    <div className="App">
      {
        todoLists.map(tl => {
          let tasksForTodoList = tasks[tl.id]
          if (tl.filter === 'active') {
            tasksForTodoList = tasks[tl.id].filter(task => task.isDone === false)
          }
          if (tl.filter === 'completed') {
            tasksForTodoList = tasks[tl.id].filter(task => task.isDone === true)
          }
          return (
            <TodoList
              key={tl.id}
              id={tl.id}
              title={tl.title}
              tasks={tasksForTodoList}
              filter={tl.filter}
              addTask={addTask}
              removeTask={removeTask}
              changeFilter={changeFilter}
              changeTaskStatus={changeTaskStatus}
              removeTodoList={removeTodoList} />
          )
        }
        )
      }

    </div>
  );
}

export default App;