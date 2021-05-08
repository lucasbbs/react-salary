import React from 'react';
import { formatValue } from '../../Helpers/formatHelpers';

const DependentesNumber = (props) => {
  const handleInputChangeDependetes = (ev) => {
    props.onInputChange(ev.target.value);
  };
  return (
    <div className='input-field col s6'>
      <i className='material-icons prefix'> face </i>
      <input
        id='dependentes'
        type='text'
        className='validate'
        value={formatValue(props.onValue)}
        onChange={handleInputChangeDependetes}
      />
      <label htmlFor='dependentes' className='active'>
        Número de Dependentes
      </label>
    </div>
  );
};

export default DependentesNumber;
