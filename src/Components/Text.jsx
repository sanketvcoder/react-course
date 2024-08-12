import React, { useContext } from 'react'
import { ButtonComp } from './Button2'
import { GlobalContext } from '.'

const Text = () => {
    const getStateFromGlobalContext = useContext(GlobalContext)
    const {theme} = useContext(GlobalContext)

  return (
    <div>
      <h1 style = {{fontSize: theme === 'light'? '50px':'100px', backgroundColor: theme === 'light'? '#fff':'#000', color : theme ==='light' ? 'blue':'yellow'}}>My name is sanket</h1>
      <ButtonComp/>
    </div>
  )
}

export default Text
