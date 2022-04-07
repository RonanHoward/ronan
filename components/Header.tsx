import { FC, useRef } from "react"

export const Header:FC = ({ }) => {
    // get <header> size
    // const headerRef = useRef(null)
    // console.log(headerRef.current?.offsetHeight)
    return (
        <header /*ref={headerRef}*/>
            <h1>Ronan Howard</h1>
        </header>
    )
}
