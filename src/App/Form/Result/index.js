import "./style.css";

export const Result = ({result}) => (
    <p className="result">
        {result !== undefined && (
            <>
            {result.sourceAmount.toFixed(2)}&nbsp;{result.currency}&nbsp;=
            {" "}
            {result.targetAmount.toFixed(2)}&nbsp;PLN
            </>
        )}
    </p>
);