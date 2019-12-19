import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import './index.scss';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            minWidth: 210,
            boxShadow: '0px 2px 2px 0px rgba(189, 195, 201, 0.37)'
        }
    })
);

const SelectControl: React.FC = () => {
    const classes = useStyles();
    return (
        <FormControl
            variant="outlined"
            className={`${classes.formControl} customSelect`}
        >
            <InputLabel htmlFor="outlined-data-native-simple">
                Select data
            </InputLabel>
            <Select
                native
                inputProps={{
                    name: 'data',
                    id: 'outlined-data-native-simple'
                }}
            >
                <option value="" />
                <option value={10}>Data 1</option>
                <option value={20}>Data 2</option>
                <option value={30}>Data 3</option>
            </Select>
        </FormControl>
    );
};

export default SelectControl;
