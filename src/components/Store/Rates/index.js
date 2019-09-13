import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateRate } from '../../../services/conversion/actions';
import { ratesAPI } from '../../../services/util';
import Selectbox from '../../Selectbox';

const Rates = ({ updateRate, label }) => {

  const [data, setData] = useState({ rates: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(ratesAPI);
      setData(result.data.rates);
    };
    fetchData();
  }, []);

  const transformRates = (data) => {
    let sort = [];

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        sort = [...sort, {
          value: data[key],
          label: key
        }]
      }
    }
    return sort;
  }

  const sortOptions = transformRates(data)

  return (
    <div className="sort">
      <div className="sort">
        {label}
        <Selectbox options={sortOptions} handleOnChange={value => updateRate(value)} />
      </div>
    </div>
  )
};

Rates.propTypes = {
  updateRate: PropTypes.func.isRequired,
  rate: PropTypes.number
};

export default connect(
  null,
  { updateRate }
)(Rates);
