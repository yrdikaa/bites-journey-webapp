import React from 'react'
import Link from 'next/link'

const Menu = () => {
    return (
        <div >
            <div className="flex justify-between gap-5">
                <Link href="/home">
                    Home
                </Link>
                <Link href="/Articles">
                    Articles
                </Link>
                <Link href="/create-article">
                   Create Article
                </Link>
            </div>
        </div>
    )
}

export default Menu