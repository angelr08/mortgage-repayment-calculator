import React from 'react'
import { Context } from './Context'
import { Calculator } from './components/Calculator'
import { Results } from './components/Results'
import { Payments } from './components/Payments'


function App() {
  const {showResults} = React.useContext(Context)
  return (
    <>
        <Calculator />
        {!showResults && <Results />}
        {showResults && <Payments />}
    </>
  )
}

export default App
