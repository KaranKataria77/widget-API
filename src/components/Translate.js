import React, {useState} from 'react';
import Dropdown from './Dropdown'
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import Convert from './Convert'

const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    }
]

const Translate = () => {
    const [selections, setSelections] = useState(options[0])
    const [text, setText] = useState('')
    return (
        <div>
        <div className="ui form">
        <div className="field">
        <label>Enter the Text</label>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        </div>

        <Dropdown 
        label={"Select the Language"} 
        selections={selections} 
        onSelections={setSelections} 
        options={options} />
        <Convert text={text} selections={selections} />
        </div>
    )
}

export default Translate;