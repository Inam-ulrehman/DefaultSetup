import React, { useContext, useReducer } from 'react'
import reducer from '../reducer/reducer'

const initialState = {
  value: true,
  content: 'active',
}

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, payload] = useReducer(reducer, initialState)
  const addClass = () => {
    payload({ type: 'ADD_CLASS' })
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        addClass,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

// =======import========

// import {useGlobalContext} from './context

// =====Use Inside the component =======

// const {value} = useGlobalContext()

// =====wrap your app  inside index========
// import { AppProvider } from './contex/contextapi'

// ;<React.StrictMode>
//   <AppProvider>
//     <App />
//   </AppProvider>
// </React.StrictMode>
