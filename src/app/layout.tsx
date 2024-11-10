// src/app/layout.tsx or src/pages/_app.tsx (depending on your Next.js version)
import { NextUIProvider } from '@nextui-org/react';
import Navigation from './components/navbar'; // Adjust the path based on your structure
import localFont from "next/font/local";  // Your font imports and global styles

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextUIProvider>
            <Navigation /> {/* Use the Navbar here */}
            <main>{children}</main> {/* Render page-specific content */}
        </NextUIProvider>
        </body>
        </html>
    );
}
