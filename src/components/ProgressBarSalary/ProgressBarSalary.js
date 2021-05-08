import React from 'react';

export default function ProgressBarSalary({ onCalculate }) {
  const myStyle = {
    divMain: {
      width: `100%`,
      display: `flex`,
      backgroundColor: `white`,
    },
    div1: {
      width: `${onCalculate.percentageINSS}%`,
      height: 20,
      backgroundColor: `#e67e22`,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    div2: {
      width: `${onCalculate.percentageIRPF}%`,
      height: 20,
      backgroundColor: `#c0392b`,
    },
    div3: {
      width: `${onCalculate.percentageSalary}%`,
      height: 20,
      backgroundColor: `#16a085`,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
  };
  return (
    <div style={{ padding: 10 }}>
      <div style={myStyle.divMain}>
        <div style={myStyle.div1} />
        <div style={myStyle.div2} />
        <div style={myStyle.div3} />
      </div>
    </div>
  );
}
