import { ColorModeProvider } from '@chakra-ui/react'
import React from 'react'
import Board from './components/Board'

const App = () => {
  // useEffect(() => { document.title=`Pixels art` })
  return (
    <ColorModeProvider>
      <div>
        <Board/>
      </div>
    </ColorModeProvider>
  )
}

export default App