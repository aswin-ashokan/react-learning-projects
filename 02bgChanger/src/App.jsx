import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap p-3 justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-6 shadow-lg bg-white px-5 py-3 rounded-3xl bg-slate-400">
            <button
              className="p-2 bg-red-700 rounded w-16"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="p-2 bg-green-700 rounded w-16"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="p-2 bg-blue-700 rounded w-16"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
