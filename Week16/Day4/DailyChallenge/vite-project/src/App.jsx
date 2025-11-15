import { useState } from 'react'



function App() {
  const [languages, setLanguages] = useState([
                                            {name: "Php", votes: 0},
                                            {name: "Python", votes: 0},
                                            {name: "JavaSript", votes: 0},
                                            {name: "Java", votes: 0}
                                          ])

//Function for handle vote increment
const handleVote = (languageName) => {
  const updatedLanguages = languages.map(l => l.name === languageName ? { ... l, votes: l.votes+1} : l);
  setLanguages(updatedLanguages);
};


  return (
    <>
      <h1> Vote Your Language!</h1>
      {
        languages.map((lang, index) => (
          <div key = {index}>
            <div> {lang.votes}</div>
            <div> {lang.name}</div>
            <button onClick={()=> handleVote(lang.name)}>Click Here</button>
          </div>
        ))
      }
    </>
  )
}

export default App
