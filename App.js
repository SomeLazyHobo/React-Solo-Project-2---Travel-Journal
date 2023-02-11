import React from "react"
import data from "./components/data.js"
import Nav from "./components/Nav.js"
import Content from "./components/Content.js"

export default function App() {
    const places = data.map(item => {
        return ( 
            <Content 
                key={item.id}
                item={item}
            />
        )
    })

    
    return (
        <div>
            <Nav />
            <main className="travel-list">
                {places}
            </main>
        </div>
    )
}