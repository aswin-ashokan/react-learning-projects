import {useState} from "react";

function QRGenerator() {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQRData] = useState("");
  const [qrSize, setQRSize] = useState();

  async function generateQR() {
    setLoading(true);
    try {
    //   const qr = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`
    //   setImg(qr)
    await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`)
    .then((response)=>response.blob())
    .then((blob)=>{const data = URL.createObjectURL(blob); return data})
    .then((data)=>setImg(data))

    } catch (err) {
      console.error("Error while generating the QR code", err);
    } finally {
      setLoading(false);
    }
  }
  function downloadQR() {
    fetch(img).then((response)=>response.blob()).then((blob)=>{
        const link = document.createElement("a");
        link.href= URL.createObjectURL(blob);
        link.download=`${qrData} QR-Code.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })

  }
  return (
    <main className="">
      <div className="flex flex-col h-screen justify-center items-center">
        {img && (
          <img
            src={img}
            alt="QR Code...."
            className="mb-5 border-2 border-gray-200 drop-shadow-lg"        
          />
        )}
        {loading && (
          <p className="text-gray-600">Please wait while loading...</p>
        )}
        <input
          className="border-2 border-blue-700 w-1/2 p-2 rounded-md m-3"
          type="text"
          name="aswin"
          value={qrData}
          id="QRData"
          placeholder="Enter your Data for QR"
          onChange={(e) => setQRData(e.target.value)}
        />
        <input
          className="border-2 border-blue-700 w-1/2 p-2 rounded-md m-3"
          type="text"
          name="aswin"
          value={qrSize}
          id="QRData"
          placeholder="Enter QR Code size"
          onChange={(e) => setQRSize(e.target.value)}
        />
        <div className="flex gap-4 mt-5">
          <button
            className="bg-blue-500 w-48 rounded-md p-3 hover:bg-blue-600 font-semibold cursor-pointer ease-in-out duration-300"
            onClick={generateQR}
            disabled={loading}
          >
            Generate QR
          </button>
          <button
            className="bg-green-500 w-48 rounded-md p-3 hover:bg-green-600 font-semibold cursor-pointer ease-in-out duration-300"
            onClick={downloadQR}
          >
            Download QR
          </button>
        </div>
      </div>
    </main>
  );
}

export default QRGenerator;
