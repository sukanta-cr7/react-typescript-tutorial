import { useState, useEffect } from "react";

function useCurrencyInfo(currency : string) {
    const [data, setData] = useState<Record<string, number>>({})
    
    useEffect(() => {
        const date = new Date()
        const dateStr = date.toISOString().split("T")[0]    //format to YYYY-MM-DD
        
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${dateStr}/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency])
    console.log(data)
    return data
}

export default useCurrencyInfo