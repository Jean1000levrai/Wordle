import Header from "./components/header";
import AttemptsWords from "./components/body";
import InputWord from "./components/inputWord";
import Footer from "./components/footer";
import History from "./components/history";
import HistoryContainer from "./components/historyContainer"

function App() {
  return (
    <div className="app-wrapper">
      <main>
        <Header />
        <AttemptsWords />
        <InputWord />
        <HistoryContainer>
          
        </HistoryContainer>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}


export default App;
