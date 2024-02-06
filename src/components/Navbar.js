import logo from "../assets/qtifyLogo.png"
import searchLogo from "../assets/Search-icon.svg"
import FeedbackButton from "./FeedbackButton"
function NavBar(){
    return(
        <div className="navbar" >
            <div className="logo">
                <img src={logo} alt="no img found"/>
            </div>
            <div className="search">
                <input type="text" name="search" id="search" placeholder="Search a album of your choice" />
                <button>
                    <img src={searchLogo} />
                </button>
            </div>
            <div className="feedback">
                <FeedbackButton/>
            </div>
        </div>
    )
}
export default NavBar