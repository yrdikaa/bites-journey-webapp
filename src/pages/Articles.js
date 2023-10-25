import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import ArticlePage from '@/components/ArticlePage/ArticlePage'
import {AuthProvider} from '../../utils/AuthContext'

const Articles = () => {
    return (
        <div>
            <AuthProvider>
                <div className='bg-white h-full'>
                    <Navbar/>
                    <ArticlePage/>
                </div>
            </AuthProvider>
        </div>
    )
}

export default Articles