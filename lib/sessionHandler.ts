// ! expirimental

import { useState } from "react"

const useSessionStorage = (initial_state: string) => {
    const [value, setValue] = useState(initial_state)

    return [
        value,
        
    ]
}