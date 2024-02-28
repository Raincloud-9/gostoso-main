import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import MobileNav from "@/components/navbar/MobileNav";
import MobileNavContextProvider from "@/contexts/MobileNavContextProvider";
import Splash from "@/components/Splash";
import ScrollBack from "@/components/ScrollBack";

export const metadata = {
	title: "O Gostoso Nagrelha",
	description: "A fililicidae esta no sabor",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-screen bg-background  text-copy ">
				<Splash />
				<MobileNavContextProvider>
					<Navbar />
					<MobileNav />
				</MobileNavContextProvider>
				{children}
				<Footer />
				<ScrollBack />
			</body>
		</html>
	);
}
