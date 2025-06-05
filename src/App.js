import React, { useState } from 'react';
import InputBox from './components/Index';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import bgCoverImg from './assest/bg-img/microsoft.jpg';
import bgImg from './assest/bg-img/background.jpg';

function App() {
  let [amount, setAmount] = useState(0);
  let [from, setFrom] = useState("usd");
  let [to, setTo] = useState("inr");
  let [convertedAmount, setconvertedAmount] = useState(0);

  let currencyInfo = useCurrencyInfo(from);
  let options = Object.keys(currencyInfo);

  let swap = () => {
    setFrom(to);
    setTo(from);
    setconvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div className="w-full p-4 md:p-10 h-screen sm:h-screen md:h-auto xl:h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgCoverImg})` }}> {/* ✅ Responsive padding */}
      <div className="flex flex-wrap mt-5 md:mt-0 bg-white/10 backdrop-blur-md backdrop-saturate-150 border border-white/20 rounded-xl shadow-xl">

        <div className="w-full md:w-1/2 hidden md:block"> {/* ✅ Responsive width */}
          <img src={bgImg} alt='bgImg' className='w-full h-full object-cover rounded-tl-lg md:rounded-bl-lg' />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-10"> {/* ✅ Responsive width and padding */}

          <h1 className='text-2xl md:text-4xl font-bold text-white'> {/* ✅ Responsive text size */}
            👋 Hello <span className='text-purple-600'>{`{`} Coders! {`}`}</span>
          </h1>

          <p className='text-base md:text-lg text-gray-50 leading-tight mt-3 mb-5'> {/* ✅ Responsive text size */}
            A responsive currency converter app with real-time exchange logic and a minimalist design using React and Tailwind CSS.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="">
              <InputBox
                label="From"
                currencyOptions={options}
                amount={(amount > 0) ? amount : 0}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className="">
              <button
                onClick={swap}
                type="button"
                className="w-full text-center bg-blue-500 text-white uppercase shadow-xl font-bold py-2 text-base md:text-lg rounded-full hover:bg-blue-400 duration-300 mb-3"
              > {/* ✅ Responsive button text */}
                swap
              </button>
            </div>

            <div className="">
              <InputBox
                label="To"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full shadow-xl py-2 font-bold text-base md:text-lg text-white bg-purple-500 hover:bg-purple-400 duration-300 uppercase"
            > {/* ✅ Responsive button text */}
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
