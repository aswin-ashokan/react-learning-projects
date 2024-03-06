import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import { Inputbox } from "./components/index.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-col gap-12 flex-wrap justify-center items-center bg-cover bg-no-repeat bg-[#05161A]"
      // style={{backgroundImage: `url(./src/assets/md-currencyConvt-bg.jpg)`}}
    >
    <h1 className="text-white text-5xl font-bold">Currency Converter</h1>
      <div className="w-full">
        <div className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-[#294D61]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Inputbox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-[#05161A] rounded-md bg-[#072E33] text-white px-4 py-1"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-5">
              <Inputbox
                label="to"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#072E33] text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
