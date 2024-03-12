import Footer from "./components/Footer";
import Header from "./components/Header";
import QRGenerator from "./components/QRGenerator";

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <Header />
        <QRGenerator />
        <Footer />
      </div>
    </>
  );
}

export default App;
