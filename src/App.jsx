import CurrencyConverter from "./components/converter";

function App() {
  return (
    <div className="App flex items-center justify-center">
      <div className=" items-center text-center justify-center mt-12">
        <h1 className="font-bold text-4xl text-blue-600 py-4">
          Currency Converter
        </h1>
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
