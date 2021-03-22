import React, { useEffect, useState } from 'react'
import { todolistsAPI } from '../api/todolists-api'

export default {
   title: 'API/TODOLISTS'
}


export const GetTodolists = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      // здесь мы будем делать запрос и ответ закидывать в стейт.
      // который в виде строки будем отображать в div-ке
      todolistsAPI.getTodolists()
         .then((res) => {
            setState(res.data)
         })
   }, [])
   return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      // здесь мы будем делать запрос и ответ закидывать в стейт.
      // который в виде строки будем отображать в div-ке
      todolistsAPI.createTodolist('newTodolist')
         .then((res) => {
            setState(res.data);
         })
   }, [])

   return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      // здесь мы будем делать запрос и ответ закидывать в стейт.
      // который в виде строки будем отображать в div-ке
      const todolistId = 'fb46ce27-97cd-4e64-a5b8-3c8f2fa43d18';
      todolistsAPI.deleteTodolist(todolistId)
         .then((res) => {
            setState(res.data);
         })
   }, [])

   return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      // здесь мы будем делать запрос и ответ закидывать в стейт.
      // который в виде строки будем отображать в div-ке
      const todolistId = '4d3a4d7f-ae2b-47d4-8af3-a79648b73caa'
      todolistsAPI.updateTodolist(todolistId, 'SOME NEW TITLE')
         .then((res) => {
            debugger;
            setState(res.data)
         })
   }, [])

   return <div> {JSON.stringify(state)}</div>
}
