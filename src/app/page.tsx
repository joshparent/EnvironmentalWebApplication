import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function App() {
    return (
        <div className="flex flex-col min-h-screen h-screen overflow-hidden">
            <Navbar isBordered>
                <NavbarBrand>
                {/*    Placeholder*/}
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Graphs
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Tutorial
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            About Research
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Research Location
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            About Team
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    {/*    Placeholder*/}
                </NavbarContent>
            </Navbar>
            <div className="flex-grow overflow-hidden">
                <iframe
                    src="http://localhost:3838"
                    className="w-full h-full"
                    style={{border: 'none'}}
                    title="R Shiny Application"
                />
            </div>
        </div>

    );
}