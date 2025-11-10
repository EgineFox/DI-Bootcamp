import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let element = <h4> My first JSX</h4>;

createRoot(document.getElementById('root')).render(<App/>);
