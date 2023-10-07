import React from 'react'
import Link from 'next/link'

const Menu = () => {
    return (
        <div >
            <div class="flex justify-between gap-5">
                <Link href="/home">
                    Home
                </Link>
                <Link href="/create-article">
                   Create Article
                </Link>
            </div>
        </div>
    )
}

export default Menu