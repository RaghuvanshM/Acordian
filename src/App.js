import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question,setQuestions] = useState(data);
  return (
  <main>
    <div className ='container'>
      <h3>Questions and ansers about login</h3>
    <section className ='info'>
{
  question.map((questions)=>{
    return <SingleQuestion key ={question.id} {...questions} />
  })
}
    </section>
    </div>
  </main>
  );
}

export default App;
