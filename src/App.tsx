import Root from './pages/root'
import About from './pages/about'
import { Router, Route } from './components'
import './App.css';

function App() {
  return (
    <Router>
      <Route path='/' component={<Root />} />
      <Route path='/about' component={<About />} />
    </Router>
  )
}

export default App