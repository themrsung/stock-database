import "../../style/components.css"

const Header = () => {
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
                                <button className="Button NavBarButton">
                                    asdas
                                </button>
                            </li>
                            <li>
                                <button className="Button NavBarButton">
                                    ss
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
