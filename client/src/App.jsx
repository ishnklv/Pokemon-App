import React from 'react'
import {Route} from 'react-router-dom'
import { Navbar } from './components'
import {Home, AddForm, Favorites} from './pages'


const App = () => {
  return(
    <div className="app">
      <Navbar />
      <div className="main">
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddForm} />
        <Route path="/favorites" component={Favorites} />
      </div>
    </div>
  )
}

export default App