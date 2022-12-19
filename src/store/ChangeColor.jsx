import { createContext } from "react";


const ChangeColor = createContext({
    color: '',
    changeColorFn: () => {},
    fontColor: '',
    changeFontColorFn: () => {},
    openModal: () => {},
    closeModal: () => {}
})

export default ChangeColor