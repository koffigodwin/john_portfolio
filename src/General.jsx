import React, {useContext, createContext, useState} from 'react'

const globalContext = createContext()


const General = ({children}) => {
    const [theme, SetTheme] = useState('winter')
    const [sidebar, SetSidebar] = useState(false)

    const HandleTheme = () =>{
        document.documentElement.setAttribute('data-theme', theme)
        if(theme === 'night'){
          SetTheme('winter')
        }
        else{
          SetTheme('night')
        }
      }
    const HandleSidebar = () => {
      SetSidebar(!sidebar)
    }

  return (
    <globalContext.Provider value={{ theme, HandleTheme, sidebar, HandleSidebar}}>
    {children}
    </globalContext.Provider>
  )
}

export default General

export const GlobalUserContext = () => {
  return useContext(globalContext)
}