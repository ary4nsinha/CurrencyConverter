import { useState, useEffect } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyOptions = currencyInfo ? Object.keys(currencyInfo) : [];

  useEffect(() => {
    if (amount && fromCurrency && toCurrency && currencyInfo[toCurrency]) {
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
          <img
            alt="logo"
            src="src\public\exchange.svg"
            width={60}
            height={60}
          />
          <CurrencySelect
            label="To"
            value={toCurrency}
            onChange={setToCurrency}
            options={currencyOptions}
          />
        </div>
        <AmountInput amount={amount} setAmount={setAmount} />
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

function ConversionResult({
  fromCurrency,
  toCurrency,
  amount,
  convertedAmount,
}) {
  return (
    <div className="bg-green-500 rounded-xl py-1 border-green-900 border-b-2 border-r-2 text-white font-bold text-lg">
      <h1>Result</h1>
      {amount && convertedAmount ? (
        <p>
          {amount} {fromCurrency.toUpperCase()} = {convertedAmount}{" "}
          {toCurrency.toUpperCase()}
        </p>
      ) : (
        <p>Enter an amount to see the conversion</p>
      )}
    </div>
  );
}

function AmountInput({ amount, setAmount }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <label htmlFor="amount" className="font-bold text-lg">
        Amount
      </label>
      <input
        id="amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="text-center rounded-lg p-2 outline-none w-52"
        min="0"
      />
    </div>
  );
}

function CurrencySelect({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col bg-blue-500 border-blue-800 border-b-2 border-r-2 shadow-lg p-2 rounded-xl">
      <label
        htmlFor={`currency-${label}`}
        className=" text-center text-white font-bold text-lg mb-1"
      >
        {label}
      </label>
      <select
        id={`currency-${label}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-zinc-50 border-r-2 border-b-2 border-zinc-900 shadow-sm rounded-lg p-1 text-center outline-none"
      >
        {options.map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
