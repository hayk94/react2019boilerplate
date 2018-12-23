import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../modules/counter';

const useStyles = makeStyles({
  button: {
    margin: '5px',
  },
});

const Home = props => {
  const classes = useStyles();

  return (
    <div>
      <h1>Home</h1>
      <p>Count: {props.count}</p>

      <p>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={props.increment}
        >
          Increment
        </Button>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={props.incrementAsync}
          disabled={props.isIncrementing}
        >
          Increment Async
        </Button>
      </p>

      <p>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={props.decrement}
        >
          Decrement
        </Button>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={props.decrementAsync}
          disabled={props.isDecrementing}
        >
          Decrement Async
        </Button>
      </p>

      <p>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={() => props.changePage()}
        >
          Go to about page via redux
        </Button>
      </p>
    </div>
  );
};

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us'),
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
