import { useState } from 'react'
import { InputBox } from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("npr")
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    return (
        <div>
<div
            className="w-full h-screen flex flex-wrap justify-around items-center bg-cover bg-no-repeat "
            
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/6534325/pexels-photo-6534325.jpeg?auto=compress&cs=tinysrgb&w=800')`,
            }}
        >



            <div className="img">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(amount) => setAmount(amount)}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                currencyOptions={options}
                                selectCurrency={from}
                                />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-[#F1DEDE] rounded-md bg-slate-600 text-white px-2 py-0.5"
                                onClick={swap}
                                >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                onAmountChange={(amount) => setAmount(amount)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-slate-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
 


        </div>

        </div>
    )
       
}

export default App
