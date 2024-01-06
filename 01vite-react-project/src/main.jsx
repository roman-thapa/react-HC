import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const aReactVariable = React.createElement(
    'a',
    {
        href: "https://google.com",
        target: "_blank"
    },
    "Visit GOOGLE"
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App />
        {aReactVariable}
    </>
)
