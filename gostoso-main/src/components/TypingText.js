"use client";

import { motion } from "framer-motion";

export default function TypingText({ title, styles }) {
	return (
		<motion.p
			initial={{ opacity: 0 }}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: {
					type: "tween",
					ease: "easeIn",
				},
			}}
			viewport={{ once: true }}
			className={styles}
		>
			{Array.from(title).map((letter, index) => (
				<motion.span
					initial={{
						opacity: 0,
						y: 20,
					}}
					whileInView={{
						opacity: 1,
						transition: { delay: index * 0.05 },
					}}
					viewport={{ once: true }}
					key={index}
				>
					{letter === " " ? "\u00A0" : letter}
				</motion.span>
			))}
		</motion.p>
	);
}
