import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Convert = ({text, selections}) => {
    const [transalte, setTranslate] = useState('');
    const [debouncetext, setDebouncetext] = useState(text)

    useEffect(() => {
        const timeoutid = setTimeout(() => {
            setDebouncetext(text)
        }, 1000);
        return () => {
            clearTimeout(timeoutid)
        }
          
    }, [text])

    useEffect(() => {
        const convert = async () => {
        const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',{}, {
            params: {
                q: debouncetext,
                target: selections.value,
                key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
            },
        })
        setTranslate(data.data.translations[0].translatedText)

    }
    convert()
    }, [selections, debouncetext])

    return (
        <div>
            <h1>{transalte}</h1>
        </div>
    )
}

export default Convert