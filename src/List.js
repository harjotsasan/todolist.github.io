import React from "react";

const List = (props) => {
    return (
        <>
            <button onClick={()=>props.onSelect(props.id)}>
                <i class="fas fa-times"></i>
            </button>
            <li> {props.currArrElem} </li>
        </>
    )
}

export default List;