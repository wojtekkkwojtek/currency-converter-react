import {useState} from "react";
import {currencies} from "../currencies";
import {Result} from "./Result";
import "./style.css";

export const Form = ({calculateResult, result}) => {
    const [currency, setCurrency] = useState(currencies[2].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency,amount);
    }

    const onReset = () => {
      setAmount("");
      setCurrency((currencies[2].short));
      calculateResult(result !== undefined);
    };

    return (
        <form 
          className="form" 
          onSubmit={onSubmit}
          onReset={onReset}
        >
          <fieldset className="form__fieldset">
            <legend className="form__legend">
            Kalkulator walutowy by Wojciech K
            </legend>
              <label>
                <span className="form__labelElement">
                1. Wybierz walutę z listy:
                </span>
                  <select 
                    className="form__field" 
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
                  </select>
                </label>

              <label>
                <span className="form__labelElement">
                2. Wpisz kwotę w wybranej walucie:*
                </span>
                  <input 
                    className="form__field" 
                    value={amount} 
                    onChange={({target}) => setAmount(target.value)} 
                    type="number" 
                    placeholder="0.01" 
                    step="0.01"
                    min="0.01" 
                    max="1000000" 
                    required
                    autoFocus
                  />
              </label>

              <p className="form_paragraph">Pole * nie może być puste</p>

              <button className="form__button">
              Przelicz na złotówki (PLN):
              </button>

              <button className="form__button" type="reset">
              Wyczyść
              </button>
                  
              <Result result={result} />
          </fieldset>
        </form>
      )
};