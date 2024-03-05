import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef('');

  const generatePassword = useCallback(() => {
    let pass = "";
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "#&@^)%([]%!?/{}";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [charAllowed, length, numberAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = ()=>{
    window.navigator.clipboard.writeText(password);
    passRef.current?.select()
  }
 
  return (
    <>
      <div className="w-full h-screen bg-slate-700 text-white grid place-items-center">
        <div className="flex flex-col w-1/2">
          <h1 className="text-center pb-3">Password Generator</h1>
          <div className="flex shadow rounded overflow-hidden mb-4 text-black">
            <input
              type="text"
              className="shadow-inner outline-none py-1 px-3 w-full"
              value={password}
              placeholder="Password"
              readOnly
              ref={passRef}
            />
            <button 
            className="bg-blue-600 text-white outline-none px-4 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              name=""
              id=""
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length : {length}</label>
            <input
              type="checkbox"
              name="number"
              id="number"
              className="ml-6"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number" className="pl-1">
              Number
            </label>
            <input
              type="checkbox"
              name="char"
              id="char"
              className="ml-4"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="char" className="pl-1">
              Character
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
