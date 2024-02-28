"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LoyaltyGrid() {
	const chickens = [
		"/images/food/chicken.png",
		"/images/food/chicken.png",
		"/images/food/chicken.png",
		"/images/food/chicken.png",
		"/images/food/chicken.png",
		"/images/food/chicken.png",
		"/images/food/chicken.png",
		"/images/food/chicken.png",
	];
	return (
		<div className="grid grid-cols-3 gap-5 ">
			{chickens.map((img, index) => (
				<motion.div
					initial={{ opacity: 0, scale: 0, rotate: -45 }}
					whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
					transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
					key={index}
					className="relative"
				>
					<div className="absolute -top-3 -left-3 flex items-center justify-center bg-black p-1 w-7 h-7 rounded-full text-foreground">
						{index + 1}
					</div>
					<Image alt="chicken" src={img} width={1000} height={1000} />
				</motion.div>
			))}

			<motion.div
				initial={{ opacity: 0, scale: 0, rotate: -45 }}
				whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
				transition={{ delay: 0.1 * (chickens.length + 1), duration: 0.5 }}
				className="relative"
			>
				<Image
					alt="chicken"
					src="/images/food/chicken.png"
					width={1000}
					height={1000}
				/>
				<div className="absolute w-[75px] h-[75px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center  p-1 border-secondary border-[4px] text-foreground bg-primary bg-opacity-45 -rotate-45 rounded-full">
					<motion.p
						initial={{ scale: 1 }}
						whileInView={{ scale: [1, 2, 1], rotate: [15, 30, 15, 30, 15] }}
						transition={{ delay: 0.1 * (chickens.length + 3), duration: 0.5 }}
						className="font-bold "
					>
						FREE
					</motion.p>
				</div>
			</motion.div>
		</div>
	);
}
