import React from 'react';

import { withStyles, createStyleSheet } from 'material-ui/styles';

import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';


const styleSheet = createStyleSheet(theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
}));

@withStyles(styleSheet)
export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    name: '',
  };

  handleChange = event => {
    console.log(event.target.value)
    this.setState({ name: event.target.value });
  };

  render() {
    const classes = this.props.classes;

    return (
      <Paper className="login-page">
        <div className="login-wrapper">
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input id="username" value={this.state.name} onChange={this.handleChange} />
              <FormHelperText>* 用户名已存在/含有非法字符</FormHelperText>
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" />
              <FormHelperText>* 请输入6-14位数字字母</FormHelperText>
            </FormControl>
          </div>
          <div>
            <Button raised color="accent" className={classes.button}>
              Login
          </Button>
            <Button raised color="primary" className={classes.button}>
              Sign up
          </Button>
          </div>
        </div>
      </Paper>
    )
  }
}
