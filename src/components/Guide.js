import React, { useState } from 'react'
import { StyledGuide } from './styles/StyledGuide'

export const Guide = () => {
    const [show, setShow] = useState(true);    

    const guideClose = () => {
        setShow(false);
    }

    return (
        show && <StyledGuide onClick={() => guideClose()}>
                <img src="/img/guide.png" alt="guide"/>
            </StyledGuide>
    )
}

