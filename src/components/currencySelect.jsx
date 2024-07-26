

export default function CurrencySelect({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col bg-blue-500 border-blue-800 border-b-2 border-r-2 shadow-lg p-2 rounded-xl">
      <label htmlFor={`currency-${label}`} className=" text-center text-white font-bold text-lg mb-1">
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
