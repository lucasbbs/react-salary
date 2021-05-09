import React, { useState } from 'react';

import InputFullSalary from './components/FullSalary/FullSalary';
import InputDependentes from './components/DependentesNumber/DependentesNumber';
import InputReadOnly from './components/InputReadOnly/InputReadOnly';
import { calculateSalaryFrom } from './Helpers/salary';
// import ProgressBarSalary from './components/ProgressBarSalary/ProgressBarSalary';
import Logo from './logo512.png';

export default function App() {
  const [fullSalary, setFullSalary] = useState(0);
  const [numberDependentes, setNumberDependentes] = useState('');

  const handleInputChange = (inputValue) => {
    setFullSalary(inputValue.replace(/[^\d\s-/]/g, ''));
  };
  const handleInputChangeDependentes = (inputValue) => {
    setNumberDependentes(inputValue.replace(/[^\d\s-/]/g, ''));
  };

  const calculateSalary = calculateSalaryFrom(fullSalary, numberDependentes);

  return (
    <div className='container card'>
      <div
        className='title'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <img src={Logo} width='80px' alt='React' />
        <h4 className='center-align'> React Salário </h4>
      </div>

      <div className='row'>
        <InputFullSalary
          onValue={fullSalary}
          onInputChange={handleInputChange}
        />
        <InputDependentes
          onValue={numberDependentes}
          onInputChange={handleInputChangeDependentes}
        />
      </div>
      <InputReadOnly onCalculate={calculateSalary} fullSalary={fullSalary} />
      {/* <ProgressBarSalary onCalculate={calculateSalary} /> */}
    </div>
  );
}
