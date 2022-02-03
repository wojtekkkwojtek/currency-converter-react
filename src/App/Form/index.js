import {useState} from "react";
import {currencies} from "../currencies";
import {Result} from "./Result";
import {
  Button,
  Disclaimer,
  Field, 
  Fieldset,
  LabelElement, 
  Legend, 
  Select
} from "./styled";

export const Form = () => {
  const [result, setResult] = useState();
  
  const calculateResult = (currency, amount) => {
    const rate = currencies
    
    .find(({short}) => short === currency)
    .rate;
    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };
    
  const [currency, setCurrency] = useState(currencies[2].short);
    
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
      event.preventDefault();
      calculateResult(currency,amount);
  };

  const onReset = (event) => {
    event.preventDefault();
    setAmount("");
    setCurrency(currencies[2].short);
    setResult();
  };

  return (
    <form 
      className="form" 
      onSubmit={onSubmit}
      onReset={onReset}
    >
      <Fieldset>
        <Legend>
          Kalkulator walutowy by Wojciech K
        </Legend>
        
        <LabelElement>
              1. Wybierz walutę z listy:
        </LabelElement>
            
          <Select 
            value={currency} 
            onChange={({target}) => setCurrency(target.value)} 
            autoFocus
          >
            {currencies.map((currency => (
              <option 
                key={currency.short} 
                value={currency.short}
              >
                {currency.name}
              </option>
            )))}
          </Select>
        
        <LabelElement>
          2. Wpisz kwotę w wybranej walucie:*
        </LabelElement>
          <Field 
            value={amount} 
            onChange={({target}) => setAmount(target.value)} 
            type="number" 
            placeholder="0.01" 
            step="0.01"
            min="0.01" 
            max="1000000" 
            required
            autoFocus
          >
          </Field>

        <Disclaimer>Pole * nie może być puste</Disclaimer>

        <Button>
          Przelicz na złotówki (PLN):
        </Button>

        <Button type="reset">
          Wyczyść
        </Button>
                  
        <Result result={result} />
      </Fieldset>
    </form>
  )
};