import React from "react";
import "./InvestTable.css";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})

const InvestTable = (props) => {
    return (
        <div>
            <table className="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total Savings</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(yearData => (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                            <td>{formatter.format(yearData.yearlyInterest)}</td>
                            <td>{formatter.format(yearData.savingsEndOfYear - props.initialInvestment - yearData.yearlyContribution * yearData.year)}</td>
                            <td>{formatter.format(props.initialInvestment + yearData.yearlyContribution * yearData.year)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvestTable;
