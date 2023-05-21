import React, { useState, useEffect } from 'react';
import LoadingIndicator from './components/LoadingIndicator';
import LoginPage from './components/LoginPage';
import LogoutButton from './components/LogoutButton';
import UserList from './components/UserList';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Navbar from "./components/Navbar"
const userListURL = 'https://randomuser.me/api/?results=500';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  welcome: {
    marginBottom: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch(`${userListURL}`)
      .then((response) => response.json())
      .then((data) => {
        setUserList((prevList) => [...prevList, ...data.results]);
        setIsLoading(false);
      });
    }, 1000)
  
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight &&
      !isLoading
    ) {
      setIsLoading(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={classes.container}>
    {isLoggedIn ? (
      <Container maxWidth="sm">
        
        <Typography variant="h4" component="h1" align="center" className={classes.welcome}>
          Welcome to the App!
        </Typography>
        <Navbar />
        <LogoutButton onLogout={handleLogout} />
        <UserList users={userList} />
        {isLoading && <LoadingIndicator />}
      </Container>
    ) : (
      <LoginPage onLogin={handleLogin} />
    )}
  </div>
  );
};

export default App;