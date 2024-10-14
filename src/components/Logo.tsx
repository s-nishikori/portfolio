import React from "react";
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
    return(
        <Link href="/">
            <Image src='/next.svg' width={150} height={60} priority alt="" />
        </Link>
    )
}

export default Logo;