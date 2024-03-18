import React from 'react';
import styles from './todoItem.module.css'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import { MdDelete } from "react-icons/md";
import { useTodoList } from '../../context/todoContext/todoContext';

const TodoItem = ({ selectedTask }) => {
    const { task, setTask, completeTask, setCompleteTask } = useTodoList()

    const handleDelete = () => {
        setTask(task.filter(item => item.id !== selectedTask.id));
    }

    const handleTaskDone = () => {
        setCompleteTask([
            ...completeTask,
            {
                id: selectedTask.id,
                text: selectedTask.text,
                completed: true
            }
        ])
        setTask(task.filter(item => item.id !== selectedTask.id));
    }

    const handleTaskUncheck = () => {
        setTask([
            ...task,
            {
                id: selectedTask.id,
                text: selectedTask.text,
                completed: false
            }
        ])
        setCompleteTask(completeTask.filter(item => item.id !== selectedTask.id));
    }

    return (
        <Box className={!selectedTask.completed ? styles.container : styles.disableContainer}>
            {console.log(selectedTask)}
            <Box className={styles.dataContainer}>
                {selectedTask.completed ?
                    <Checkbox
                        className={styles.check}
                        color="secondary"
                        checked={selectedTask.completed}
                        onChange={() => handleTaskUncheck()}
                    /> :
                    <Checkbox
                        className={styles.check}
                        color="secondary"
                        checked={selectedTask.completed}
                        onChange={() => handleTaskDone()}
                    />
                }
                <Box className={styles.fieldContainer}>
                    <Typography className={!selectedTask.completed ? styles.itemText : styles.doneItemText}>{selectedTask.email}</Typography>
                    <Typography className={!selectedTask.completed ? styles.itemText : styles.doneItemText}>{selectedTask.phNo}</Typography>
                </Box>
            </Box>
            {!selectedTask.completed &&
                <Box
                    className={styles.iconContainer}
                    onClick={handleDelete}
                >
                    <MdDelete className={styles.icon} />
                </Box>
            }
        </Box>
    );
}

export default TodoItem;