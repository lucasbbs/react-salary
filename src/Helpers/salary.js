// Fonte: https://www.todacarreira.com/calculo-salario-liquido/

const INSS_TABLE = [
  {
    id: 1,
    minValue: 0,
    maxValue: 1100,
    difference: 1045 - 0,
    discountPercentage: 0.075,
    discountValue: -1,
  },
  {
    id: 2,
    minValue: 1100.01,
    maxValue: 2203.48,
    difference: 2203.48 - 1100.01,
    discountPercentage: 0.09,
  },
  {
    id: 3,
    minValue: 2203.49,
    maxValue: 3305.22,
    difference: 3305.22 - 2203.49,
    discountPercentage: 0.12,
  },
  {
    id: 4,
    minValue: 3305.23,
    maxValue: 6433.57,
    difference: 6433.57 - 3305.23,
    discountPercentage: 0.14,
  },
];

function round(value) {
  return +value.toFixed(2);
}

function calculateDiscountINSS(baseINSS) {
  let discountINSS = 0;

  if (baseINSS > 6101.07) {
    return 713.1;
  }

  for (var i = 0; i < INSS_TABLE.length; i++) {
    var currentItem = INSS_TABLE[i];
    let discountValue = 0;

    if (baseINSS > currentItem.maxValue) {
      // prettier-ignore
      discountValue =
                round(currentItem.difference * currentItem.discountPercentage);

      discountINSS += discountValue;
    } else {
      // prettier-ignore
      discountValue =
                round((baseINSS - currentItem.minValue) * currentItem.discountPercentage);

      discountINSS += discountValue;
      break;
    }
  }

  discountINSS = round(discountINSS);

  return discountINSS;
}

function calculateDiscountIRPF(baseIRPF) {
  let discountIRPF =
    baseIRPF < 1903.98
      ? 0
      : baseIRPF < 2826.65
      ? round(baseIRPF * 0.075) - 142.8
      : baseIRPF < 3751.05
      ? round(baseIRPF * 0.15) - 354.8
      : baseIRPF < 4664.68
      ? round(baseIRPF * 0.225) - 636.13
      : round(baseIRPF * 0.275) - 869.36;

  discountIRPF = round(discountIRPF);

  return discountIRPF;
}

function calculatePercentage(returnValue, salary) {
  returnValue = (returnValue / salary) * 100;
  returnValue = isNaN(returnValue) ? 0 : returnValue;
  return returnValue.toFixed(2);
}

function calculateSalaryFrom(fullSalary, dependentes) {
  const baseINSS = fullSalary;
  const discountINSS = calculateDiscountINSS(baseINSS);
  const percentageINSS = calculatePercentage(discountINSS, baseINSS);

  const discountDependentes =
    baseINSS > 189.59 * dependentes ? 189.59 * dependentes : 0;
  const percentageDependentes = calculatePercentage(
    discountDependentes,
    baseINSS
  );
  const baseIRPF = baseINSS - discountINSS - discountDependentes;
  const discountIRPF = calculateDiscountIRPF(baseIRPF);
  const percentageIRPF = calculatePercentage(discountIRPF, baseINSS);

  const netSalary = baseINSS - discountINSS - discountIRPF;
  const percentageSalary = calculatePercentage(netSalary, baseINSS);

  return {
    baseINSS,
    discountINSS,
    discountDependentes,
    percentageDependentes,
    percentageINSS,
    baseIRPF,
    discountIRPF,
    percentageIRPF,
    netSalary,
    percentageSalary,
  };
}

export { calculateSalaryFrom };
