
export default function AmountInput({ amount, setAmount }) {
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
      />
    </div>
  );
}
