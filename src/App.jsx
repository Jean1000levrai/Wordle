import Header from "./components/header";
import AttemptsWords from "./components/body";
import InputWord from "./components/inputWord";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app-wrapper">
      <main>
        <Header />
        <AttemptsWords />
        <InputWord />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}


export default App;
