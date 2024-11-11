// components/Layout.tsx

import { ReactNode } from "react";
import Navigation from "./navigation";
import {NextUIProvider} from "@nextui-org/react";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <NextUIProvider>
            <Navigation/>
            <main>{children}</main>
        </NextUIProvider>
    );
};

export default Layout;
