import React, { ChangeEvent } from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import { Delete } from '@material-ui/icons'

import EditableSpan from './EditableSpan'
import { TaskType } from './AppWithRedux'

type TaskPropsType = {
    // taskID
    // todolistID
    task: TaskType
    onChangeHandler: (taskID: string, isDone: boolean) => void
    onTitleChangeHandler: (taskID: string, title: string) => void
    onClickHandler: (taskID: string) => void
}

export const Task: React.FC<TaskPropsType> = React.memo(({task, onChangeHandler, onTitleChangeHandler, onClickHandler}) => {

    return <div key={task.id} className={task.isDone ? "is-done" : ""}>
        <Checkbox
            checked={task.isDone}
            color="primary"
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(task.id, e.currentTarget.checked)}
        />

        <EditableSpan title={task.title} changeValue={() => onTitleChangeHandler(task.id, task.title)} />
        <IconButton onClick={() => onClickHandler(task.id)}>
            <Delete />
        </IconButton>
    </div>
})