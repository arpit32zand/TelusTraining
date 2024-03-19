import React from 'react';
import styles from './todoItem.module.css'

import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { MdDelete } from "react-icons/md";
import { addCompleteTasks, addTasks, removeCompleteTask, removeTask } from '../../redux/actions/actions';


const TodoItem = ({ selectedTask }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeTask(selectedTask.id));
    }

    const handleTaskDone = () => {
        dispatch(addCompleteTasks(
            {
                id: selectedTask.id,
                email: selectedTask.email,
                note: selectedTask.note,
                name: selectedTask.name,
                phNo: selectedTask.phNo,
                completed: true
            }
        ))
        dispatch(removeTask(selectedTask.id));
    }

    const handleTaskUncheck = () => {
        dispatch(addTasks(
            {
                id: selectedTask.id,
                email: selectedTask.email,
                note: selectedTask.note,
                name: selectedTask.name,
                phNo: selectedTask.phNo,
                completed: false
            }
        ))
        dispatch(removeCompleteTask(selectedTask.id));
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
                    <Typography
                        className={!selectedTask.completed ? styles.itemText : styles.doneItemText}
                    >
                        {selectedTask.name}
                    </Typography>
                    <Typography
                        className={!selectedTask.completed ? styles.itemText : styles.doneItemText}
                    >
                        {selectedTask.email}
                    </Typography>
                    <Typography
                        className={!selectedTask.completed ? styles.itemText : styles.doneItemText}
                    >
                        {selectedTask.phNo}
                    </Typography>
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