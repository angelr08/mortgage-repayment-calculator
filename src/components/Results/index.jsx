import illustrationEmpty from '../../assets/images/illustration-empty.svg';
import './Results.css';

function Results() {
    return (
        <section className="results">
            <span>
                <img src={illustrationEmpty} alt="Empty results illustration" />
            </span>
            <h2>Results shown here</h2>
            <p>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
        </section>
    )
}

export { Results }