import {Wrapper} from "./styled";

export const Result = ({result}) => (
    <Wrapper>
        {result !== undefined && (
            <>
            {result.sourceAmount.toFixed(2)}&nbsp;{result.currency}&nbsp;=
            {" "}
            {result.targetAmount.toFixed(2)}&nbsp;PLN
            </>
        )}
    </Wrapper>
);