import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import { useState } from 'react'

import React from 'react'

const initialIsDarkModeContext = {
  isDarkmode: 0,
  setIsDarkmode: () => {}
}
export const IsDarkModeContext = React.createContext(initialIsDarkModeContext)


function MyApp({ Component, pageProps }) {
  // ダークモードを判定するstate
  const [isDarkmode, setIsDarkmode] = useState(0)

  return(
    <IsDarkModeContext.Provider value={{isDarkmode, setIsDarkmode}}>
      <Component {...pageProps} />
    </IsDarkModeContext.Provider>
  )
}

export default MyApp