import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addOne, addTen, removeOne, removeTen, reset } from './state';

function counterContainer({ counter, addOne, addTen, removeOne, removeTen, reset }) {
  return (
    <div className="counterContainer">
      <p>{counter}</p>
      <button type="button" onClick={() => addOne()}>+1</button>
      <button type="button" onClick={() => removeOne()}>-1</button>
      <button type="button" onClick={() => addTen()}>+10</button>
      <button type="button" onClick={() => removeTen()}>-10</button>
      <button type="button" onClick={() => reset()}>reset</button>
    </div>
  );
}

const mstp = state => ({
  counter: state.counter
});

const mdtp = dispatch => bindActionCreators({
  addOne,
  addTen,
  removeOne,
  removeTen,
  reset
}, dispatch);

export default connect(mstp, mdtp)(counterContainer);
