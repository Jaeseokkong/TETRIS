import React, { useState } from 'react'
import { createScreen } from '../gameHelper'

//테트리스 화면 훅
export const useScreen = () => {
    const [screen, setScreen] = useState(createScreen());

    return [screen, setScreen];
}