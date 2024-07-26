

export default function ConversionResult({ fromCurrency, toCurrency, amount, convertedAmount }) {
    return (
      <div className="bg-green-500 rounded-xl py-1 border-green-900 border-b-2 border-r-2 text-white font-bold text-lg">
      <h1>Result</h1>
        {amount && convertedAmount ? (
          <p>{amount} {fromCurrency.toUpperCase()} = {convertedAmount} {toCurrency.toUpperCase()}</p>
        ) : (
          <p>Enter an amount to see the conversion</p>
        )}
      </div>
    );
  }
  
  