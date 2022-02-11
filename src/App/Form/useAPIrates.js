import {useEffect, useState} from "react";
import axios from "axios";

export const useAPIrates = () => {
    const [APIrates, setAPIrates] = useState({
        state: "loading",
    });

    /*useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("https://api.exchangerate.host/latest?base=PLN");

                if(!response.ok) {
                    throw new Error (response.statusText);
                }

                const {rates, date} = await response.json();
                
                setAPIrates({
                    state: "success",
                    rates,
                    date,
                });
            } catch {
                setAPIrates({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);*/

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                const {rates, date} = response.data;
                
                setAPIrates({
                    state: "success",
                    rates,
                    date,
                });
            } catch {
                setAPIrates({
                    state: "error",
                });
            }
        };

        setTimeout(getRates, 1*1000);
    }, []);


    return APIrates;
};