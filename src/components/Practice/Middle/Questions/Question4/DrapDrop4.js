import React from 'react'
import Board from '../Question1/Board'
import Card from '../Question1/Card'
import '../Question1/DragDrop.css'
function DrapDrop4() {
    return (
        <div className='dragDrop'>
        <div className='answerBoard'>
        <Board id='board-1' className='board'/>
        <Board id='board-2' className='board'/>
        <Board id='board-3' className='board'/>
        <Board id='board-4' className='board'/>

        </div>
        <div className='imageBoard'>
        <Board id='board-5' className='board'>
            <Card id='card-1' className='card' draggable='true' >
                <img className='cartoonPhotos' src='https://ds055uzetaobb.cloudfront.net/uploads/d0bJPuBGB9-black-ace.png' alt=''/>
            </Card>
        </Board>
        <Board id='board-6' className='board'>
            <Card id='card-2' className='card' draggable='true' >
            <img className='cartoonPhotos' src='https://ds055uzetaobb.cloudfront.net/uploads/PZCNroQ2XB-black-king.png' alt=''/>
            </Card>
            
        </Board>
        <Board id='board-7' className='board'>
            <Card id='card-3' className='card' draggable='true' >
            <img className='cartoonPhotos' src="https://ds055uzetaobb.cloudfront.net/uploads/Y43G7ol9AD-black-queen.png" alt=""/>
            </Card>
            
        </Board>
        <Board id='board-8' className='board'>
            <Card id='card-4' className='card' draggable='true' >
            <img className='cartoonPhotos' src="https://ds055uzetaobb.cloudfront.net/uploads/rcij15XKXP-black-jack.png" alt=""/>
            </Card>
            
        </Board>
        </div>
    </div>
    )
}

export default DrapDrop4
