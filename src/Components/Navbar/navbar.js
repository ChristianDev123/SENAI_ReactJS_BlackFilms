import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";

export default function NavbarPage(){
    return(
        <>
            <Navbar
                color="dark"
                dark={true}
                expand="xl"
                full
                fixed='top'
            >
                <NavbarBrand href="#">
                    BlackFilms
                </NavbarBrand>
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="#listingMovies">
                                Catálogo de Filmes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#footerBox">
                                Sobre mim
                            </NavLink>
                        </NavItem>    
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}