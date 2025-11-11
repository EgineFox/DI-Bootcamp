import User from './components/User'
import './App.css'

function App() {
  
const echo = (msg) => {
  alert(msg);
};

  return (
    <>
      <User a= {1} name ={'Lora'}/>
      <button onClick={() => echo('hi')}> Click</button>
    </>
  )
}

export default App
