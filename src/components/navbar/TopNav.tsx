import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { GiWolfHead, GiWolfHowl } from "react-icons/gi";
import Link from 'next/link';
import NavLink from './NavLink';

export const TopNav = () => {
    return (
        <Navbar
            maxWidth='xl'
            className='bg-gradient-to-r from-sky-400 to-purple-700'
            classNames={{
                item: [
                    'text-xl',
                    'text-white',
                    'uppercase',
                    'data-[active=true]:text-green-300',
                ]
            }} >
            <NavbarBrand as={Link} href='/' >
                <GiWolfHead color='green' size={50} />
                <div className='flex items-center text-3xl font-bold'>
                    <span className='text-gray-900'>Furat</span>
                    <span className='text-green-600'>Shop</span>
                </div>
            </NavbarBrand>
            <NavbarContent justify='center'>
                <NavLink href='/members' label='Members' />
                <NavLink href='/lists' label='Members' />
                <NavLink href='/messages' label='Messages' />
            </NavbarContent>
            <NavbarContent justify='end'>
                <Button as={Link} href='/login' variant='bordered' className='text-white'>Login</Button>
                <Button as={Link} href='/register' variant='bordered' className='text-white'>Register</Button>
            </NavbarContent>
        </Navbar>
    )
}
