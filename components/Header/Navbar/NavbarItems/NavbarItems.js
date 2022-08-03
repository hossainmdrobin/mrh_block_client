import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavbarItems = ({ Icon, title, url }) => {
    const router = useRouter()
    return (
        <div  onClick = {()=>router.push(url)} class="cursor-pointer tooltip tooltip-bottom mx-4 py-1 group" data-tip={title}>
            <Link href='/'><Icon class='group-hover:amimate-bounce h-8 mb-1 group-hover:animate-bounce text-white' /></Link>
        </div>
    );
}

export default NavbarItems;
