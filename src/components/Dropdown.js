import React, {useState, useRef, useEffect} from 'react';

const Dropdown = ({options, selections, onSelections, label}) => {
    const [open, setOpen] = useState(false)

    const ref = useRef();

   useEffect(() => {
       document.body.addEventListener("click", (event) => {
           if(ref.current.contains(event.target)){
               return;
           }
           setOpen(false)
       })
   })
        
            const renderOptions = options.map((option) => {
                if(option.value === selections.value){
                    return null;
                }
                return (
                    <div onClick={() => onSelections(option)} key={option.label} className="item">
                        {option.label}
                    </div>
                )
            });
            return (
                <div ref={ref} className="ui form">
                    <div className="field">
                        <label className="label">{label}</label>
                        <div onClick={() => setOpen(!open)} 
                        className={`ui selection dropdown ${open ? "visible active" : ""}`}>
                            <i className="dropdown icon"></i>
                            <div className="text">{selections.label}</div>
                            <div className={`menu ${open ? "visible transition" : ""}`}>{renderOptions}</div>
                        </div>
                    </div>
                </div>
            );
       
};



export default Dropdown;