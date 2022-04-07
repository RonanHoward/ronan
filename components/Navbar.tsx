import Link from 'next/link'
import { FC } from 'react'

export const Navbar: FC = ({ }) => {
    return (
        <nav>
            <Link href='/' passHref>
                <a className='navLink afterUnderline'>Home</a>
            </Link>
            <Link href='https://github.com/RonanHoward' passHref>
                <a className='navLink afterUnderline'>GitHub</a>
            </Link>
            <Link href='/contact' passHref>
                <a className='navLink afterUnderline'>Contact</a>
            </Link>
        </nav>
    )
}
