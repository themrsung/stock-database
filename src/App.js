import "./style/App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home activePage="Home" />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
