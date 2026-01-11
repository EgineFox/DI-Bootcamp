import './App.css'
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import UserList from './components/UserList';



function App() {
  
  return (
    <>
    <Greeting name="Ekaterina" messageCount={5}/>
      <Counter />

      <h1>User Cards Demo</h1>
      
     
      <UserCard 
        name="Ekaterina" 
        age={36} 
        role="Fullstack Developer" 
      />
      
    
      <UserCard 
        name="Anna" 
        age={7} 
      />
      
      
      <UserCard name="Ivan" />
      
     
      <UserCard role="Designer" />
      
   
      <UserCard />
      
    
      <UserCard 
        name="Baby" 
        age={0} 
        role="Newborn" 
      />

      <UserList />
    </>
  )
}

export default App
