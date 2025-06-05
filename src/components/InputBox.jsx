import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    amountDisable = false,
    onAmountChange,
    selectCurrency = "usd",
    currencyDisable = false,
    onCurrencyChange,
    currencyOptions = [],

    className = "",
}) {

    const amountInputId = useId()

    return (
        <>
            <div className={`${className}`}>
                <div className="">
                    <label htmlFor={amountInputId} className="block text-lg uppercase font-medium py-2 text-black">
                        {label}
                    </label>
                    <input
                        id={amountInputId}
                        className='w-full py-2 px-4 rounded-full border border-1 border-purple-500 text-gray-700 bg-transparent'
                        type="number"
                        placeholder="Amount"
                        value={amount}
                        disabled={amountDisable}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    />
                </div>
                <div className="flex flex-wrap space-x-4 my-5">
                    <p className="bg-purple-500 py-2 px-4 shadow-lg rounded-full text-white font-semibold text-sm uppercase">Currency Type</p>
                    <select
                        className='bg-blue-500 py-2 ps-5 shadow-lg rounded-full text-white font-semibold text-sm uppercase'
                        value={selectCurrency}
                        disabled={currencyDisable}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    >

                        {
                            currencyOptions.map((v, i) => (
                                <option key={i} value={v}>
                                    {v}
                                </option>
                            ))
                        }

                    </select>
                </div>
            </div>
        </>
    );
}

export default InputBox;