import React from 'react'
import Board from './Board'
import Card from './Card'
import './DragDrop.css'
function DragDrop() {
    return (
        <div className='dragDrop'>
            <div className='answerBoard'>
            <Board id='board-1' className='board'/>
            <Board id='board-2' className='board'/>
            <Board id='board-3' className='board'/>
            </div>
            <div className='imageBoard'>
            <Board id='board-4' className='board'>
                <Card id='card-1' className='card' draggable='true' >
                    <img className='cartoonPhotos' src='https://ds055uzetaobb.cloudfront.net/uploads/eREixHfFwc-p1.png' alt=''/>
                </Card>
            </Board>
            <Board id='board-4' className='board'>
                <Card id='card-2' className='card' draggable='true' >
                <img className='cartoonPhotos' src='https://ds055uzetaobb.cloudfront.net/uploads/zIwV9OLFiO-p2.png' alt=''/>
                </Card>
                
            </Board>
            <Board id='board-4' className='board'>
                <Card id='card-3' className='card' draggable='true' >
                <img className='cartoonPhotos' src="https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png" alt=""/>
                </Card>
                
            </Board>
            </div>
        </div>
    )
}

export default DragDrop
