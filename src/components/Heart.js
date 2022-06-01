import HeartLogo from '../assets/heart.svg';

const Heart = (prop) => {
    return(
      <div className='heart'>
        <img className='heart-img' src={HeartLogo} alt='heart' />
        <p className='heart-message'>{prop.msg}</p>
      </div>
    )
  }

  export default Heart;