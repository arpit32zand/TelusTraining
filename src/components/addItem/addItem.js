import React, { useState } from 'react';
import styles from './addItem.module.css'

import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useTodoList } from '../../context/todoContext/todoContext';

const AddItem = () => {
    const navigate = useNavigate()
    const { task, setTask } = useTodoList()

    const [text, setText] = useState('')

    const handleAddItem = () => {
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };
        setTask([...task, newTask]);
        setText('');
        navigate('/')
    }

    return (
        <Box className={styles.container}>
            <Typography variant="h2" className={styles.heading}>
                ADD TASK
            </Typography>
            <TextField
                label="Title"
                variant="outlined"
                className={styles.textField}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Box className={styles.buttonContainer}>
                <Button
                    className={styles.cancelButton}
                    variant="contained"
                    onClick={() => navigate('/')}
                >
                    Cancel
                </Button>
                <Button
                    className={styles.button}
                    variant="contained"
                    onClick={handleAddItem}
                >
                    Add +
                </Button>
            </Box>
        </Box >
    );
};

export default AddItem;