import React, { useRef } from 'react'
function Card(props) {

    const card=useRef(null);

    const dragStart=(e)=>{
        console.log(card.current)
        // console.log(target);
        e.dataTransfer.setData('card_id',card.current.id);
        setTimeout(()=>{
            card.current.style.display='none';
        },0);
    }

    const dragOver=(e)=>{
        e.stopPropagation();
    }

    return (
        <div
            id={props.id}
            onDragStart={dragStart}
            draggable={props.draggable}
            onDragOver={dragOver}
            className={props.className}
            ref={card}
        >
          
            {props.children}
        </div>
    )
}

export default Card
