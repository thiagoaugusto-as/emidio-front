import { useState } from "react"

export const useForm = (inputs: any) => {
    const [input, setInput] = useState(inputs);

    const handleInputChange = ({target}: any) => {
        setInput({...input, [target.name]: target.value})
    }

    return [input, handleInputChange, setInput];
}