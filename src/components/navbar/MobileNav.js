"use client";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { MobileContext } from "@/contexts/MobileNavContextProvider";
import { navLinks } from "@/constants";

export default function MobileNav() {
	const [isOpen, setIsOpen] = useContext(MobileContext);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, x: -800 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ type: "easeInOut" }}
					exit={{ opacity: 0, x: -800 }}
					className="fixed flex flex-col gap-5 items-start w-screen h-screen z-30 p-14 bg-primary text-copy md:hidden"
				>
					<div className="flex flex-col w-full gap-y-6 text-accent1  text-3xl  my-52 ">
						{navLinks.map((navItem, index) => (
							<Link
								aria-label={`Link to ${navItem.title}`}
								key={index}
								href={navItem.link}
								className="w-full border-b-2 font-themed border-copy transition-all hover:border-primary1 hover:text-primary1 uppercase "
								onClick={() => {
									setIsOpen(false);
								}}
							>
								{navItem.title}
							</Link>
						))}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
