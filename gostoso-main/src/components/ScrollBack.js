"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollBack() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div
			className={`fixed bottom-5 right-5 z-40 transition-opacity duration-500 ease-in-out ${
				scrollY >= 700 ? "opacity-100" : "opacity-0"
			} ${scrollY >= 700 ? "pointer-events-auto" : "pointer-events-none"}`}
		>
			<div
				onClick={() => {
					scrollTo({ top: 0, left: 0, behavior: "smooth" });
				}}
				className="w-10 h-10 bg-primary rounded-full shadow-md my-auto cursor-pointer relative flex items-center justify-center"
			>
				<FaArrowUp className="text-copy" />
			</div>
		</div>
	);
}
