import BuggyCounter from './Components/BuggyCounter'
import ErrorBoundary from './Components/ErrorBoundary'
import Color from './Components/Color'
function App() {



  return (
    <>
      <div>
        <h3>Click on the numbers to increase the counters.
          The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</h3>
      </div>
      <hr />
      <ErrorBoundary>
        <BuggyCounter></BuggyCounter>
        <BuggyCounter></BuggyCounter>
      </ErrorBoundary>
      <hr />
      <ErrorBoundary>
        <BuggyCounter></BuggyCounter>
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter></BuggyCounter>
      </ErrorBoundary>
      <hr />
        <BuggyCounter></BuggyCounter>
      <hr />
      <Color></Color>
    </>
  )
}

export default App
