import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import ArticlePage from '@/components/ArticlePage/ArticlePage'
import { AuthProvider } from '../../utils/AuthContext'

const Articles = () => {
  return (
        <div>
            <AuthProvider>
                <Navbar/>
                <ArticlePage />
            </AuthProvider>
        </div>
  )
}

export default Articles