

import {useState} from 'react';
import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [ selectedTopic, setSelectedTopic ]= useState();
  function handleSelect(selectedButton) {
    //selectedButton => 'components','jsx','props','State'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
}
  return (
    <div>
        <Header />
      <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        {['Hello']}
        <ul>
        {CORE_CONCEPTS.map((conceptItem) =>(
          <CoreConcept {...conceptItem}/>
          ))}
        
         
        </ul>
      </section>
      <section id="examples">
      <h2>Examples</h2>
      <menu>
      <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
      <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
      <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
      <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
      </menu>
      {! selectedTopic ?   <p>Please select a topic.</p>: null}
      {selectedTopic ? (
        <div id="tab-content">

      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>

      </div>
      ) : null}
      </section>
      </main>
    </div>
  );
}

export default App;
