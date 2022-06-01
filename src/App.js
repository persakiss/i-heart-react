import HeartLogo from './heart.svg';
import './App.css';

const message = 'cool cud';

const Heart = (prop) => {
  return(
    <div className='heart'>
      <img className='heart-img' src={HeartLogo} alt='heart' />
      <p className='heart-message'>{prop.msg}</p>
    </div>
  )
}

const Header = (prop) => {
  return(
    <div className='App-header'>I Heart React</div>
  )
}

function App() {
  return (
    <>
      <Header />
      <Heart msg={message} />
    </>
  )
}

export default App;
