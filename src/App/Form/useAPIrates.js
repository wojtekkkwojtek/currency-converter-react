import {useEffect, useState} from "react";
import axios from "axios";

export const useApiRates = () => {
    const [ApiRates, setApiRates] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                const {rates, date} = response.data;
                
                setApiRates({
                    state: "success",
                    rates,
                    date,
                });
            } catch {
                setApiRates({
                    state: "error",
                });
            }
        };

        setTimeout(getRates, 1*1000);
    }, []);

    return ApiRates;
};