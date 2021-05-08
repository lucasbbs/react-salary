import React from 'react';
import { formatValue } from '../../Helpers/formatHelpers';

export default function FullSalary(props) {
  const handleInputChange = (ev) => {
    props.onInputChange(ev.target.value);
  };

  return (
    <>
      <div className='input-field col s6'>
        <i className='material-icons prefix'> attach_money </i>
        <input
          id='icon_prefix'
          type='text'
          className='validate'
          value={formatValue(props.onValue)}
          onChange={handleInputChange}
        />
        <label htmlFor='icon_prefix' className='active'>
          Salário bruto
        </label>
      </div>
    </>
  );
}
