import Header from './components/Header'
import Heart from './components/Heart'
import './App.css';

const message = 'cool cud';





function App() {
  return (
    <>
      <Header />
      <Heart msg={message} />
    </>
  )
}

export default App;
