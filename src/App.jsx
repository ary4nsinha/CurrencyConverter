import React, { useState, useEffect } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import {InputBox} from "./components/index"

function App() {

  const amountDisabled = true

  const [amount, setAmount] = useState()  
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const conversionRef = useCurrencyInfo(from)
  const currencyOptions = Object.keys(useCurrencyInfo(from))

  function convert(){
    setConvertedAmount(amount * conversionRef[to])
  }
  
  function swap(){
    setTo(from)
    setFrom(to)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  return (
    <>
      <div className='flex flex-col max-w-[50%] items-center bg-gray-600 rounded-xl p-7'>
        <InputBox 
          amount = {amount} 
          setAmount = {setAmount} 
          label = "From"
          currencyOptions = {currencyOptions}
          placeholder = {from}
          setFromTo = {setFrom}
        />
        <div className='relative m-3 z-10'>
          <button 
            className='bg-blue-500 text-white cursor-pointer w-fit absolute text-xl py-2 px-4 
                      rounded-lg bottom-0'
            onClick={swap}
          >swap</button>
        </div>
        <InputBox 
          convertedAmount={convertedAmount}
          label = "To"
          currencyOptions = {currencyOptions}
          placeholder = {to}
          setFromTo = {setTo}
          amountDisabled = {amountDisabled}
        />
        <button 
          className='bg-blue-500 text-white cursor-pointer text-6xl w-full rounded-xl mt-6 py-2'
          onClick={convert}
        >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </div>
    </>
  )
}

export default App
