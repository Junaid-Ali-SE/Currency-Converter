import { useEffect, useState } from "react"

function useCurrency (currencyType) {
    const [data, setData] = useState({})
   useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyType}.json`)
    .then((res) => res.json() )
    .then((res) => setData(res[currencyType]) )
}, [currencyType]) 
console.log(data);

return data

}

export default useCurrency;


