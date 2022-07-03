
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';



function App() {
  const cards =data.map(item =>{
    return (
      <Card
      item={item}
      
      />
    )
  })
  return (
    <div>
     <Header />
     <Hero/>
     <section className='cards-list'>
     {cards}
     </section>
      

    </div>
  )
}

export default App
