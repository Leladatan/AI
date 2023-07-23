import './globals.css';
import type { Metadata } from 'next';
import {Inter} from 'next/font/google';
import {NextFont} from "next/dist/compiled/@next/font";
import {ClerkProvider} from "@clerk/nextjs";

const inter: NextFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'AI Platform',
    description: 'AI Platform',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
        <html lang="en">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    </ClerkProvider>
  )
};
