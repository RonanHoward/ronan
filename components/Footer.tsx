import Link from 'next/link'
import { FC } from 'react'

export const Footer:FC = ({ }) => {

    return (
        <footer>
            <Link href='/' passHref>
                <a className='afterUnderline'>ronanhoward.com</a>
            </Link>
            <Link href='https://github.com/RonanHoward' passHref>
                <a className='afterUnderline'>github.com/RonanHoward</a>
            </Link>
            <Link href='https://stackoverflow.com/users/17646964/ronan-howard' passHref>
                <a className='afterUnderline'>stackoverflow.com/users/17646964/ronan-howard</a>
            </Link>
            <span style={{marginTop:'5px'}}>Designed and Programmed from scratch by Ronan C. Howard -2022</span>
            <span>Last Updated - 3/19/22</span>
        </footer>
    )
}