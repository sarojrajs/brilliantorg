import React from 'react'
import Board from '../Question1/Board'
import Card from '../Question1/Card'
import '../Question1/DragDrop.css'
function DragDrop5() {
    return (
        <div className='dragDrop'>
        <div className='answerBoard'>
        <Board id='board-1' className='board'/>
        <Board id='board-2' className='board'/>
        <Board id='board-3' className='board'/>
        <Board id='board-4' className='board'/>
        <Board id='board-5' className='board'/>

        </div>
        <div className='imageBoard'>
        <Board id='board-6' className='board'>
            <Card id='card-1' className='card' draggable='true' >
                <img className='cartoonPhotos' src='https://ds055uzetaobb.cloudfront.net/uploads/Qbk64lDKVy-runner-11.png' alt=''/>
            </Card>
        </Board>
        <Board id='board-7' className='board'>
            <Card id='card-2' className='card' draggable='true' >
            <img className='cartoonPhotos' src='https://ds055uzetaobb.cloudfront.net/uploads/Qbk64lDKVy-runner-11.png' alt=''/>
            </Card>
            
        </Board>
        <Board id='board-8' className='board'>
            <Card id='card-3' className='card' draggable='true' >
            <img className='cartoonPhotos' src="https://ds055uzetaobb.cloudfront.net/uploads/odaceGNNt0-runner-31.png" alt=""/>
            </Card>
            
        </Board>
        <Board id='board-9' className='board'>
            <Card id='card-4' className='card' draggable='true' >
            <img className='cartoonPhotos' src="https://ds055uzetaobb.cloudfront.net/uploads/odaceGNNt0-runner-31.png" alt=""/>
            </Card>
            
        </Board>
        <Board id='board-10' className='board'>
            <Card id='card-5' className='card' draggable='true' >
            <img className='cartoonPhotos' src="https://ds055uzetaobb.cloudfront.net/uploads/Q6Q6wE9Sqw-runner-52.png" alt=""/>
            </Card>
            
        </Board>
        </div>
    </div>
    )
}

export default DragDrop5
