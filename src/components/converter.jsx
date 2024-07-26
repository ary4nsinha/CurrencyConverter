import { useState, useEffect } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo.js";
import CurrencySelect from "./currencySelect.jsx";
import AmountInput from "./amountInput.jsx";
import ConversionResult from "./conversionOutput.jsx";

function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyInfo);

  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      const result = amount * currencyInfo[toCurrency];
      setConvertedAmount(result.toFixed(2));
    } else {
      setConvertedAmount("");
    }
  }, [amount, fromCurrency, toCurrency, currencyInfo]);

  return (
    <section className="p-6 bg-zinc-900/20 w-[400px] rounded-xl border-r-2 border-zinc-900 border-b-2 shadow-lg">
      <div className="space-y-4">
        <div className="flex justify-evenly">
          <CurrencySelect
            label="From"
            value={fromCurrency}
            onChange={setFromCurrency}
            options={currencyOptions}
          />
          <img alt="logo" src="src\public\exchange.svg" width={60} height={60}/>
          <CurrencySelect
            label="To"
            value={toCurrency}
            onChange={setToCurrency}
            options={currencyOptions}
          />
        </div>
        <AmountInput
          amount={amount}
          setAmount={setAmount}
        />
        <ConversionResult
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          amount={amount}
          convertedAmount={convertedAmount}
        />
      </div>
    </section>
  );
}

export default CurrencyConverter;



