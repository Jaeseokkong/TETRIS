import React from 'react';

//Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  return (
    <div>
        <Stage/>
        <aside>
            <div>
                <Display text="점수"/>
                <Display text="줄 수"/>
                <Display text="레벨"/>
            </div>
            <StartButton/>
        </aside>
    </div>
  )
}

export default Tetris;