'use client'

import { useState } from "react"

export const MyComponent = () => {

    const [count, setCount] = useState(0)

    return (
        <h1 onClick={() => setCount(count+1)}>
            A component in {count}
        </h1>
    )
}