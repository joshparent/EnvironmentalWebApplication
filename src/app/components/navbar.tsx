// src/components/Navbar.tsx
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { useRouter } from "next/router";

const Navigation: React.FC = () => {
    const router = useRouter();
    const activePage = router.pathname;

    // Helper function to determine if the current page is active
    const isActive = (path: string): React.CSSProperties => {
        return activePage === path ? { fontWeight: 'bold', color: 'green' } : {};
    };

    return (
        <Navbar isBordered>
            <NavbarBrand>
                {/* Placeholder for logo or brand name */}
                My App
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href="/" style={isActive("/")}>
                        Graphs
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/data" style={isActive("/data")}>
                        Data
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/project-overview" style={isActive("/project-overview")}>
                        Project Overview
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/study-site" style={isActive("/study-site")}>
                        Study Site
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/research-team" style={isActive("/research-team")}>
                        Research Team
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                {/* Placeholder for any buttons or icons */}
            </NavbarContent>
        </Navbar>
    );
};

export default Navigation;
