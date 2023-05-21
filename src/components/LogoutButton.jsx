import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

const LogoutButton = ({ onLogout }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      onClick={onLogout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
