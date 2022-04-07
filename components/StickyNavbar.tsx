import { FC, useContext } from "react"
import Link from 'next/link'
import { ScrollPosition } from "../lib/context"

export const StickyNavbar: FC = ({ }) => {
    const scroll = useContext(ScrollPosition)
    const show = scroll > 275

    return (
        <nav style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            zIndex: '9999',
            overflow: 'hidden',
            height: show?'':'0',
            padding: show?'':'0',
            transition: 'height 0.4s, padding 0.4s'
        }}>
            <Link href='/' passHref>
                <a className='sticky navLink afterUnderline'>Home</a>
            </Link>
            <Link href='https://github.com/RonanHoward' passHref>
                <a className='sticky navLink afterUnderline'>GitHub</a>
            </Link>
            <Link href='/contact' passHref>
                <a className='sticky navLink afterUnderline'>Contact</a>
            </Link>
        </nav>
    )
}
