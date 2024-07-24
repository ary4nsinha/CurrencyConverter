function InputBox({amount, convertedAmount, setAmount, label, currencyOptions, placeholder, setFromTo, amountDisabled}){

    return (
        <div className="flex flex-col gap-3 w-full bg-white rounded-xl overflow-hidden p-3 text-xl">
            <div className="flex justify-between text-gray-400">
                <div className="inline">{label}</div>
                <label htmlFor="c-type">Currency Type</label>
            </div>
            <div className="flex justify-between">
                <input 
                    type="text" 
                    className="inline outline-1 outline-slate-400" 
                    placeholder={0} 
                    value={amount ? amount : convertedAmount}
                    disabled = {amountDisabled}
                    onChange={amount && ((e) => setAmount(e.target.value))}
                ></input>
                <select 
                    className="bg-gray-200 rounded-md p-2 text-sm outline-none cursor-pointer" 
                    name="curr-type" 
                    id="c-type"
                    value={label}
                    onChange={(e) => {
                        setFromTo(e.target.value)
                    }}
                >
                    <option value={placeholder}>{placeholder}</option>
                    {currencyOptions.map((currency) => {
                        return <option value={currency} key={currency}>{currency}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default InputBox