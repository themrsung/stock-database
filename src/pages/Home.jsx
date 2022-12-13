import "../style/Home.css"
import applyHeaderAndFooter from "../components/page-elements"

const Home = (props) => {
    return applyHeaderAndFooter(props, () => {
        return <div className="Home">Home</div>
    })
}

export default Home
