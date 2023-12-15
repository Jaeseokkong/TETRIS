import React, { useEffect, useState } from 'react'
import { createHold } from '../gameHelper';

export const useHold = () => {
    const [hold, setHold] = useState(createHold());
    const [holdType, setHoldType] = useState(null);
    const [can, setCan] = useState(true);

    useEffect(() => {
        setCan(false);
        
        


    }, [setHoldType])

    return [hold, setHoldType, can, setCan]
}
