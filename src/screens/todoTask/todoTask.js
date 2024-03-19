import React, { useState } from 'react';
import styles from './todoTask.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { IoMdArrowRoundBack } from "react-icons/io";
import { Checkbox } from '@mui/material';
import { addCompleteTasks, addTasks, removeCompleteTask, removeTask } from '../../redux/actions/actions';

export default function TodoTask() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const currentTask = useSelector(state => state.currTask)

    const [checked, setChecked] = useState(currentTask.completed)

    const handleTaskDone = () => {
        setChecked(true)
        dispatch(addCompleteTasks(
            {
                ...currentTask,
                completed: true
            }
        ))
        dispatch(removeTask(currentTask.id));
    }

    const handleTaskUncheck = () => {
        setChecked(false)
        dispatch(addTasks(
            {
                ...currentTask,
                completed: false
            }
        ))
        dispatch(removeCompleteTask(currentTask.id));
    }

    return (
        <Box className={styles.container}>
            <Box className={styles.header}>
                <IoMdArrowRoundBack
                    className={styles.backButton}
                    onClick={() => navigate('/')}
                />
                <Typography variant="h5" className={styles.heading}>
                    {currentTask.name}
                </Typography>
                {currentTask.completed ?
                    <Checkbox
                        className={styles.check}
                        color="secondary"
                        checked={checked}
                        onChange={() => handleTaskUncheck()}
                    /> :
                    <Checkbox
                        className={styles.check}
                        color="secondary"
                        checked={checked}
                        onChange={() => handleTaskDone()}
                    />
                }
            </Box>
            <Box className={styles.body}>
                <Typography variant="body1" className={styles.note}>
                    {currentTask.note}
                </Typography>
            </Box>
        </Box>
    );
}