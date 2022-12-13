import "../../style/components.css"

const Header = (props) => {
    const isHomeActive = props.activePage === "Home"
    const isStocksActive = props.activePage === "Stocks"

    return (
        <header className="Header">
            <div className="HeaderLeft">
                <div className="HeaderLeftTitleContainer">
                    <img
                        className="HeaderLeftTitleImage"
                        src="https://kratos.kr/web/product/big/202110/360bf71f5d3f8415bf18689c9bf00a5d.png"
                        alt="Page Logo"
                    />
                    <h1 className="HeaderLeftTitleText">TITLE</h1>
                </div>
            </div>
            <div className="HeaderRight">
                <div className="HeaderRightNavBarContainer">
                    <nav className="HeaderRightNavBar">
                        <ul className="HeaderRightNavBarList">
                            <li>
                                <button
                                    className={
                                        isHomeActive
                                            ? "Button NavBarButton ActiveButton"
                                            : "Button NavBarButton"
                                    }
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    className={
                                        isStocksActive
                                            ? "Button NavBarButton ActiveButton"
                                            : "Button NavBarButton"
                                    }
                                >
                                    Stocks
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
