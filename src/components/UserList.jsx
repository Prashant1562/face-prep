import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  avatar: {
    marginRight: theme.spacing(2),
    borderRadius: '50%',
  },
}));

const UserList = ({ users }) => {
  const classes = useStyles();

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.login.uuid} className={classes.listItem}>
          <ListItemAvatar>
            <Avatar src={user.picture.thumbnail} alt={user.name.first} className={classes.avatar} />
          </ListItemAvatar>
          <ListItemText primary={`${user.name.first} ${user.name.last}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
