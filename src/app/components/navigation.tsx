// components/Navigation.tsx

import Link from "next/link";
import { useRouter } from "next/router";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";

const Navigation = () => {
    const router = useRouter();
    const isActive = (path: string) => {
        return router.pathname === path
            ? { fontWeight: "bold", color: "#0070f3" }
            : {};
    };

    return (
        <Navbar isBordered>
            <NavbarBrand>
                {/* Placeholder for logo or brand name */}
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
