import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.1.23/v1/currencies/${currency}.json`)
            .then((res) => res.json())  // Get the response and parse it
            .then((res) => setData(res[currency] || {}))  // Update state with currency data
            .catch((error) => console.error(error));  // Catch and log any errors
    }, [currency]);

    return data;  // Return the data directly
}

export default useCurrencyInfo;
