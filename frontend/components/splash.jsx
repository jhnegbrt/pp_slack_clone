import React from 'react'

function Header(){
  return(
    <div className='header'>
      <h1>Welcome to Sleuth!</h1>
      <h3>A Chat-App with 'Sleuth Mode'</h3>
    </div>
  )
}

function Sleuth(){
  return(
    <div className='sleuth'>
      <h2>Enter in Sleuth mode</h2>
    </div>

  )
}

function Slack(){
  return(
    <div className='slack'>
      <h2>Enter Sleuth with a personal account, or Sign-Up</h2>
    </div>
  )
}

function SlackAndSleuth(){
  return(
    <div className='slackandsleuth'>
      <Slack />
      <Sleuth />
    </div>
  )
}

const Splash = () =>{
  return(
    <div className='fullpage'>
        <Header />
        <SlackAndSleuth />
    </div>
    
  )
}

export default Splash