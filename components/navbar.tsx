import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Kbd} from "@nextui-org/kbd";
import {Link} from "@nextui-org/link";
import {Input} from "@nextui-org/input";
import {link as linkStyles} from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import {siteConfig} from "@/config/site";
import {ThemeSwitch} from "@/components/theme-switch";
import {
    TwitterIcon,
    GithubIcon,
    DiscordIcon,
    HeartFilledIcon,
    SearchIcon,
    Logo,
} from "@/components/icons";

export const Navbar = () => {

    return (
        <NextUINavbar>
            <NavbarContent justify="start">
            {/*    Placeholder */}
            </NavbarContent>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Link href="/">
                        Graphs
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/data">
                        Data
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/project-overview">
                        Project Overview
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/study-site">
                        Study Site
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/research-team">
                        Research Team
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
            {/*    Placeholder */}
            </NavbarContent>
        </NextUINavbar>
    );
};
