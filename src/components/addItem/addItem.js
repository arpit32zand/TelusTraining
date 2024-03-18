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

    const [email, setEmail] = useState({ value: '', error: false })
    const [phNo, setPhNo] = useState({ value: null, error: false })

    const handleAddItem = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        if(emailRegex.test(email.value)) {
            if(phoneRegex.test(phNo.value)) {
                const newTask = {
                    id: Date.now(),
                    email: email.value,
                    phNo: phNo.value,
                    completed: false
                };
                setTask([...task, newTask]);
                setEmail({ value: '', error: false });
                setPhNo({ value: null, error: false })
                navigate('/')
            } else {
                setPhNo({ value: phNo.value, error: true })
            }
        } else {
            setEmail({ value: email.value, error: true })
        }        
    }

    return (
        <Box className={styles.container}>
            <Typography variant="h2" className={styles.heading}>
                ADD TASK
            </Typography>
            <Box className={styles.inputContainer}>
                <TextField
                    label="Email"
                    variant="outlined"
                    className={styles.textField}
                    value={email.value}
                    onChange={(e) => setEmail({ value: e.target.value, error: false })}
                    error={email.error}
                    helperText={email.error ? 'Invalid email format' : ''}
                />
                <TextField
                    label="Phone No."
                    variant="outlined"
                    className={styles.textField}
                    value={phNo.value}
                    onChange={(e) => setPhNo({ value: e.target.value, error: false })}
                    error={phNo.error}
                    helperText={phNo.error ? 'Invalid Phone Number' : ''}
                />
            </Box>
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