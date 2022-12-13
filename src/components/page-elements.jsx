import Footer from "./shared/footer"
import Header from "./shared/header"

// Returns complete page with header and footer
//
// Params
// 0. props = (variable)props
// 1. Element = (function)page content
const applyHeaderAndFooter = (props, Element) => {
    return (
        <div className="PageContainer">
            <Header activePage={props.activePage} />
            <Element />
            <Footer />
        </div>
    )
}

export default applyHeaderAndFooter
