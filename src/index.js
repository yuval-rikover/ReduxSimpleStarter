import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyB84sPnqzUo7MWRKNQFyLVw5m2m-c3L6Nw'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>  
  )
}

ReactDOM.render(<App />, document.querySelector('.container'))
