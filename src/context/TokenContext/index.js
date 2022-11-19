import React, {createContext, useState} from 'react'

export const TokenContext = createContext();

export function TokenProvider(props) {

  const [token, setToken] = useState('')

  return (
    <TokenContext.Provider value={{token, setToken}}>
      {props.children}
    </TokenContext.Provider>
  )
}