import React, {useState} from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search';
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Router from './components/Route';
import Header from './components/Header';



const App = () => {

  const items = [
    {
      title: "What is react?",
      content: "React is programming languaage for javascript programmer."
    },
    {
      title: "Why to react?",
      content: "React is favorite of all programmer,."
    },
    {
      title: "why react is favorite of programmer?",
      content: "it is realiable to use."
    }
  ]

  const options = [
    {
      label: "the color red",
      value: "red"
    },
    {
      label: " the color green",
      value: "green"
    },
    {
      label: "the color pink",
      value: "pink"
    }
  ]

 const [selections, setSelections] = useState(options[0])

  return (
    <div>
      <Header />
      <Router path="/Search">
         <Search />
      </Router>
      <Router path="/Dropdown">
         <Dropdown label="Select the color" selections={selections} onSelections={setSelections} options={options} />
      </Router>
      <Router path="/Translate">
        <Translate />
      </Router>
      <Router path="/">
        <Accordion items={items}/>
      </Router>
    </div>
  ) 
}


export default App;


