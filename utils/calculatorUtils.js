// utils/calculatorUtils.js
export const calculateBasicInterest = (
  initialInvestment,
  period,
  interestRate
) => {
  const initial = parseFloat(initialInvestment);
  const rate = parseFloat(interestRate) / 100;
  const times = parseInt(period);

  const resultsArray = [];
  let totalAmount = initial;
  let cumulativeProfit = 0;

  for (let i = 1; i <= times; i++) {
    const profit = totalAmount * rate;
    cumulativeProfit += profit;
    totalAmount += profit;

    resultsArray.push({
      id: i.toString(),
      profit: profit.toFixed(2),
      total: totalAmount.toFixed(2),
      yield: ((profit / initial) * 100).toFixed(2) + '%',
    });
  }

  return {
    resultsArray,
    totalProfit: cumulativeProfit.toFixed(2),
    resultingAmount: totalAmount.toFixed(2),
  };
};

export const calculateAdvancedInterest = (
  initialInvestment,
  monthlyContribution,
  investmentPeriod,
  isYears,
  interestRate,
  isYearlyRate,
  compoundFrequency
) => {
  const initial = parseFloat(initialInvestment) || 0;
  const monthly = parseFloat(monthlyContribution) || 0;
  const period = parseInt(investmentPeriod) || 0;
  const rate = parseFloat(interestRate) / 100;
  const n =
    compoundFrequency === 'Annually'
      ? 1
      : compoundFrequency === 'Semi-Annually'
        ? 2
        : compoundFrequency === 'Quarterly'
          ? 4
          : 12;
  const isMonths = !isYears;
  const time = isMonths ? period / 12 : period;
  const effectiveRate = isYearlyRate ? rate : rate / 12;
  const compoundTimes = isYearlyRate ? time * n : period;

  let totalAmount = initial;
  let cumulativeProfit = 0;
  const resultsArray = [];

  for (let i = 1; i <= compoundTimes; i++) {
    const profit = (totalAmount * effectiveRate) / n;
    cumulativeProfit += profit;
    totalAmount += profit + (i > 1 ? monthly : 0);

    resultsArray.push({
      id: i.toString(),
      year: isMonths ? Math.floor(i / 12) : i,
      principal: totalAmount.toFixed(2),
      profit: profit.toFixed(2),
      total: (totalAmount + profit).toFixed(2),
    });
  }

  return {
    resultsArray,
    totalProfit: cumulativeProfit.toFixed(2),
    finalValue: totalAmount.toFixed(2),
  };
};
