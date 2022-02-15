import {useState, useRef} from "react";
import {Result} from "./Result";
import {
  Button,
  Disclaimer,
  Field, 
  Fieldset,
  LabelElement, 
  Legend, 
  Loading,
  LoadingError,
} from "./styled";
import {useApiRates} from "./useApiRates";
import loadingAnimation from "./loading.gif"

export const Form = () => {
  const [result, setResult] = useState();
  const inputRef = useRef(null);
  const ApiRates = useApiRates();
  
  const calculateResult = (currency, amount) => {
    const rate = ApiRates.rates[currency];
    
    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };
    
  const [currency, setCurrency] = useState("EUR");
    
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
      event.preventDefault();
      calculateResult(currency,amount);
  };

  const onReset = (event) => {
    event.preventDefault();
    setAmount("");
    setCurrency("EUR");
    setResult();
    inputRef.current.focus();
  };

  return (
    <form 
      onSubmit={onSubmit}
      onReset={onReset}
    >
      <Fieldset>
        <Legend>
          Kalkulator walutowy by Wojciech K
        </Legend>
        
        {ApiRates.state === "loading"
          ? (
            <Loading>
              Trwa pobieranie walut z&nbsp;Europejskiego Banku Centralnego
              <br/><img src={loadingAnimation} alt="loading animation"/>
            </Loading>
          )
          : (
            ApiRates.state === "error" 
              ? (
                <LoadingError>
                Nie udało się pobrać danych i uruchomić aplikacji. 
                <br/>Wystąpił problem z serwerem lub połączeniem internetowym. 
                <br/>Spróbuj ponownie za chwilę.
                <br/>Kontakt z twórcą aplikacji: wojtekkk@protonmail.com
                </LoadingError>
              ) : (
                <>
                  <LabelElement>
                    1. Wybierz walutę z listy:
                  </LabelElement>
            
                  <Field
                    as="select" 
                    value={currency} 
                    onChange={({target}) => setCurrency(target.value)} 
                    autoFocus
                  >
                
                    {Object.keys(ApiRates.rates).map(((currency) => (
                      <option 
                        key={currency} 
                        value={currency}
                      >
                        {currency}
                      </option>
                    )))}
                  </Field>
        
                  <LabelElement>
                    2. Wpisz kwotę w wybranej walucie:*
                  </LabelElement>
                
                  <Field
                    ref={inputRef} 
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

                  <Disclaimer>
                    Pole * nie może być puste
                    <br/>Kalkulacja na dzień: {ApiRates.date}
                  </Disclaimer>

                  <Button>
                    Przelicz na złotówki (PLN):
                  </Button>

                  <Button type="reset">
                    Wyczyść
                  </Button>
                  
                  <Result result={result} />
                </> 
              )         
          )
  
        }
      </Fieldset>
    </form>
  );
};