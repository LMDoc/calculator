import './App.css'
import Container from './components/container'
import Display from './components/display'
import Buttons from './components/buttons'

import { useCalculator } from './components/container/hooks'

const styles = {
  app: {
    display: 'flex',
    justifyContent: 'center',
    background: 'black',
    height: '100vh',
  }
}

const App = () => {
  const {
    calculation,
    result,
    clickEvents,
    list,
  } = useCalculator()

  return (
    <div style={styles.app}>
      <Container>
        <Display
          result={result}
          calculation={calculation}
          list={list}
        />
        <Buttons clickEvents={clickEvents} />
      </Container>
    </div>
  )
}

export default App
