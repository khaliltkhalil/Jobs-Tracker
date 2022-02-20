import Wrapper from "../assets/wrappers/BigSidebar"
import links from '../utils/links'
import Logo from '../components/Logo'
import NavLinks from "./NavLinks"
import { useAppContext } from "../context/appContext"

const BigSidebar = () => {
    const { showSidebar } = useAppContext()
    return (
        <Wrapper>
            <div className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
                <div className="content">
                    <header>
                        <Logo />
                    </header>
                    <NavLinks links={links} />
                </div>
            </div>
        </Wrapper>
    )
}

export default BigSidebar