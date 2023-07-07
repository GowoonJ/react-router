/* eslint-disable react-refresh/only-export-components */
import { 
  createContext,
  useContext, 
  useEffect, 
  useState 
} from 'react'

interface RouterProps {
  children: React.ReactNode
}

interface CurrentPath {
  currentPath: string
}

const RouterContext = createContext<CurrentPath>({} as CurrentPath)

const Router = ({ children }: RouterProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname)

    window.addEventListener('popstate', onPopState)
    return () => {
      window.removeEventListener('popstate', onPopState)
    }
  }, [])

  return (
    <RouterContext.Provider value={{ currentPath }}>
      {children}
    </RouterContext.Provider>
  )
}

const useCurrentPathContext = () => useContext(RouterContext)

export { Router as default, useCurrentPathContext }