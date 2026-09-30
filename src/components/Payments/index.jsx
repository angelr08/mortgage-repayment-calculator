import React from "react";
import { Context } from "../../Context";
import "./Payments.css";

function Payments() {
    const { monthlyPayment, totalPayment } = React.useContext(Context);
    return (
        <section className="payments">
            <h3>Your results</h3>
            <p>Your results are shown below based on the information you provided.To adjust the results, edit the form and click “calculate repayments” again.</p>
            <div className="payments__results">
                <div className="payments__results--monthly">
                    <p>Your monthly repayments</p>
                    <span>${isNaN(monthlyPayment) ? 'Fill in the missing input' : monthlyPayment.toFixed(2)}</span>
                </div>
                <div className="payments__results--total">
                    <p>Total you'll repay over the term</p>
                    <span>${isNaN(totalPayment) ? 'Fill in the missing input' : totalPayment.toFixed(2)}</span>
                </div>
            </div>
        </section>
    )
}

export { Payments }