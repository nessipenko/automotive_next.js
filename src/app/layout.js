import { Roboto } from "next/font/google";
import "./globals.css";
import FixedHeader from "./components/fixedHeader";


const roboto = Roboto({ weight: ['400', '700'], subsets: ["latin"] });

export const metadata = {
    title: "Auto",
    description: "Generated by create next app",
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <FixedHeader />
                {children}</body>
        </html>
    );
}