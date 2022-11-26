import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import './styles.css'

function GoBackButton() {

  const handleButtonClick = () => {
    window.history.back()
  }

  return (
    <button onClick={handleButtonClick} className='goBackButton'>
      <BiArrowBack />
    </button>
  )
}

export default GoBackButton