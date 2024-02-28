"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import TypingText from "./TypingText";
import Logo from "../../public/images/logo.png";

export default function Splash() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		(async () => {
			setTimeout(() => {
				setIsLoading(false);
				window.scrollTo(0, 0);
			}, 2000);
		})();
	}, []);
	return (
		<AnimatePresence mode="wait">
			{isLoading && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="h-screen w-screen fixed top-0 left-0 z-[60] flex flex-col gap-5 items-center justify-center bg-primary"
				>
					<motion.div
						initial={{
							opacity: 0,
							scale: 0,
						}}
						animate={{
							opacity: 1,
							scale: [1, 1.5, 1],
						}}
						className={`w-32 rounded-full shadow-lg bg-black `}
					>
						<Image priority alt="logo" src={Logo} />
					</motion.div>
					<TypingText
						title='"A Felicidade esta no sabor"'
						styles="text-2xl uppercase "
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
