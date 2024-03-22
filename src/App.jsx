import { useState } from 'react';
import data from './data'
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data)

  return <main>
      <section className='container'>
        <h3>Today {people.length} no of People have Birthday</h3>
        <List people={people}/>
        <button type='button' className='btn btn-block' onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
};
export default App;
