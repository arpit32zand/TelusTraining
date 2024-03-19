import React from 'react';

import { TextField } from '@mui/material';

const InputField = ({ label, value, setValue, error, helper }) => {
    return (
        <TextField
            label={label}
            variant="outlined"
            fullWidth
            // className={styles.textField}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={error}
            helperText={error ? helper : ''}
        />
    );
};

export default InputField;