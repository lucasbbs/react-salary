import React from 'react';

import { formatValue } from '../../Helpers/formatHelpers';
import css from './InputReadOnly.module.css';

export default function InputReadOnly({ onCalculate }) {
  const {
    baseINSS,
    baseIRPF,
    discountINSS,
    discountDependentes,
    percentageDependentes,
    discountIRPF,
    netSalary,
    percentageINSS,
    percentageIRPF,
    percentageSalary,
  } = onCalculate;

  return (
    <>
      <div className='row'>
        <div className='input-field col s2'>
          <input
            disabled
            value={`R$ ${formatValue(baseINSS)}`}
            id='disabled'
            type='text'
          />
          <label htmlFor='disabled' className='active'>
            Base INSS
          </label>
        </div>
        <div className='input-field col s3'>
          <input
            disabled
            value={` R$ ${formatValue(discountINSS)} (${percentageINSS}) `}
            id='disabled'
            type='text'
            className={css.inss}
          />
          <label htmlFor='disabled' className='active'>
            Desconto INSS
          </label>
        </div>
        <div className='input-field col s3'>
          <input
            disabled
            value={` R$ ${formatValue(
              discountDependentes
            )} (${percentageDependentes}) `}
            id='disabled'
            type='text'
            className={css.inss}
          />
          <label htmlFor='disabled' className='active'>
            Desconto de Dependentes
          </label>
        </div>
        <div className='input-field col s2'>
          <input
            disabled
            value={`R$ ${formatValue(baseIRPF)}`}
            id='disabled'
            type='text'
            className='validate '
          />
          <label htmlFor='disabled' className='active'>
            Base IRPF
          </label>
        </div>
        <div className='input-field col s2'>
          <input
            disabled
            value={`R$ ${formatValue(discountIRPF)} (${percentageIRPF})`}
            id='disabled'
            type='text'
            className={css.irpf}
          />
          <label htmlFor='disabled' className='active'>
            Desconto IRPF
          </label>
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s6'>
          <input
            disabled
            value={`R$ ${formatValue(netSalary)} (${percentageSalary})`}
            id='disabled'
            type='text'
            className={css.salarioLiquido}
          />
          <label htmlFor='disabled' className='active'>
            Salário líquido
          </label>
        </div>
      </div>
    </>
  );
}
