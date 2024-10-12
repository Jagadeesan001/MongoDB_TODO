import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../src/app.css"
ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='p-10 bg-slate-600 '>
    <h1 className='flex justify-center bg-slate-600 text-4xl border-current'>TODO LIST</h1>
    <div className='bg-slate-600 h-svh flex justify-center'>
        <App />
    </div>
    </div>
)
