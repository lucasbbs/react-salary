import React, { useState } from 'react';

import InputFullSalary from './components/FullSalary/FullSalary';
import InputDependentes from './components/DependentesNumber/DependentesNumber';
import InputReadOnly from './components/InputReadOnly/InputReadOnly';
import { calculateSalaryFrom } from './Helpers/salary';
import ProgressBarSalary from './components/ProgressBarSalary/ProgressBarSalary';

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
      <h4 className='center-align'> React Salário </h4>
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
      <ProgressBarSalary onCalculate={calculateSalary} />
    </div>
  );
}
