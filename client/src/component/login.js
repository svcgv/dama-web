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
  container: {
    display: 'flex',
    flexWrap: 'row-reverse',
  },
  formControl: {
    margin: theme.spacing.unit,
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
        <div className={classes.container}>
          <Paper>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="name-simple">Name</InputLabel>
              <Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
              <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>

            <TextField
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
            <Button raised color="accent" className={classes.button}>
              Login
            </Button>
            <Button raised color="primary" className={classes.button}>
              Sign up
            </Button>

          </Paper>
        </div>
      )
    }
}
