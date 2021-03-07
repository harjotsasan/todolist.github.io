import React from "react";
import './App.css';

const List = (props) => {

    const StrikerFun = (id) => {
        console.log(`Checked ${id}`);
        let element = document.getElementById(id);
            element.classList.toggle("striker");
    }
    return (
        <>
            <button onClick={()=>props.onSelect(props.id)}>
                <i className="fas fa-times"></i>
            </button>
            <button onClick={() => StrikerFun(props.id)}>
                <i className="fas fa-check"></i>
            </button>

            <li id={props.id}> {props.currArrElem} </li>
            
        </>
    )
}

export default List;