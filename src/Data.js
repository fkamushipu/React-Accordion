import "./App.css";
import React, { useState } from 'react' ;

import { FcExpand , FcCollapse } from "react-icons/fc";

const Data = ({ title, body }) => {

    const [show,setShow] = useState(false);

    // click method 
    const handleClick =() =>{
        setShow(!show);
    }
    // add the ! symbol to alternate
    // const handleClick =() =>{
    //     setShow(true);
    // }

    return (
        <div className={show ? "accordion-opened":"accordion-item" } onClick={handleClick} 
        // onMouseEnter={() => setShow(true)} 
        // onMouseLeave={() => setShow(false)}
        >
            <div className = "accordion-title"> 
                <h5>{title}</h5>

                <p>
    {show ? <FcCollapse size={20} /> : <FcExpand size={20} />}
</p>

            </div>
            {show && <p>{body}</p>}
        </div>
    );
}
export default Data;