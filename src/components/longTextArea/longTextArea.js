import React from 'react';
// import styles from './longTextArea.module.css'

import TextField from '@mui/material/TextField';

const LongTextArea = ({ label, miRows, value, setValue, error, helper }) => {
    return (
        <TextField
            id="outlined-multiline-flexible"
            label={label}
            multiline
            minRows={miRows}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={error}
            helperText={error ? helper : ''}
        />
    );
};

export default LongTextArea;