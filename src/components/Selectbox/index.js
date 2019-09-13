import React from 'react';
import PropTypes from 'prop-types';

const Selectbox = ({ options, classes, handleOnChange }) => {
  const createOptions = options =>
    options.map(o => (
      <option value={o.value} key={o.value} label={o.label}>
        {o.label}
      </option>
    ));

  return (
    <select onChange={e => {
      const index = e.nativeEvent.target.selectedIndex;
      const currencyId = e.nativeEvent.target[index].text;
      return handleOnChange({ value: e.nativeEvent.target.value, currencyId })
    }}
      className={classes}>
      {createOptions(options)}
    </select>
  );
};

Selectbox.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired
};

export default Selectbox;
