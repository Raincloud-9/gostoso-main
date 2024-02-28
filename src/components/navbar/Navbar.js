"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MobileContext } from "@/contexts/MobileNavContextProvider";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import Logo from "../../../public/images/logo.png";

export default function Navbar() {
	const { scrollY } = useScroll();
	const pathname = usePathname();

	const transformOpacity = useTransform(
		scrollY,
		[0, 100],
		["#00000000", "#000"]
	);
	const [isOpen] = useContext(MobileContext);

	return (
		<>
			<Link
				aria-label="Link to Home"
				href="/"
				className={`fixed top-5 left-1/2 -translate-x-1/2 w-32 rounded-full shadow-lg  bg-black z-50`}
			>
				<Image priority alt="logo" src={Logo} />
			</Link>
			<motion.nav
				className={`fixed top-0 w-full left-1/2 -translate-x-1/2  px-6 md:px-16 py-9 z-40`}
				initial={
					pathname == "/" ? { opacity: 0, top: -10 } : { opacity: 1, top: 0 }
				}
				animate={{ opacity: 1, top: 0 }}
				transition={{ duration: 0.5 }}
				style={{
					backgroundColor: isOpen ? "#000" : transformOpacity,
				}}
			>
				<div className="flex justify-end md:justify-between max-w-[1000px] mx-auto  text-background text-2xl uppercase  ">
					<div className="hidden md:flex gap-5  ">
						{navLinks.slice(0, navLinks.length / 2).map((navItem, index) => (
							<Link
								aria-label={`Link to ${navItem.title}`}
								key={index}
								href={navItem.link}
								className="font-themed hover:text-primary transition-all"
							>
								{navItem.title}
							</Link>
						))}
					</div>
					<div className="hidden md:flex gap-5 ">
						{navLinks
							.slice(navLinks.length / 2, navLinks.length)
							.map((navItem, index) => (
								<Link
									aria-label={`Link to ${navItem.title}`}
									key={index}
									href={navItem.link}
									className="font-themed hover:text-primary transition-all"
								>
									{navItem.title}
								</Link>
							))}
					</div>
					<Hamburger />
				</div>
			</motion.nav>
		</>
	);
}
