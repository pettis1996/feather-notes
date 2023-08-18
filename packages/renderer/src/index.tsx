import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'


const domNode = document.getElementById('root')
const root = createRoot(domNode as Element)

root.render(<App />)