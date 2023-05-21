import  {useState}  from "react";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    width: 'fit-content',
    padding: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));
const LoginPage = ({ onLogin }) => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (username === 'foo' && password === 'bar') {
        onLogin();
        alert("Successfully Login")
      } else {
        alert(" Wrong credentials ")
      }
    };
  
    return (
        <div className={classes.container}>
        <h1>Login</h1>
        <TextField
          className={classes.input}
          type="text"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          className={classes.input}
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
    );
  };
  
  export default LoginPage;