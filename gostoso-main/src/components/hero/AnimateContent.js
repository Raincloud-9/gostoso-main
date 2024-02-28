"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimateContent({ title, copy1, copy2, ctas }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className="relative z-10 flex flex-col gap-24 items-center justify-center  mx-auto  py-52  px-6 text-center md:px-16 max-w-[1440px]"
		>
			<div className=" flex flex-col items-center gap-10 ">
				<h1 className=" text-background max-w-[500px] text-6xl sm:text-8xl md:text-10xl leading-none font-themed ">
					{title}
				</h1>
				<div className="text-center ">
					<motion.p
						initial={{ opacity: 0, y: -30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-primary max-w-[450px] uppercase"
					>
						{copy2}
					</motion.p>
					<motion.p
						initial={{ opacity: 0, y: -30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-primary max-w-[350px] uppercase mx-auto"
					>
						{copy1}
					</motion.p>
				</div>
			</div>

			<div className="flex gap-7 w-full max-w-[500px]">
				{ctas.map((cta, index) => (
					<Link
						aria-label={`Link to ${cta}`}
						key={index}
						href={`/${cta}`}
						className=" bg-primary w-full p-3 rounded-md capitalize text-reg xs:text-lg sm:text-2xl md:text-3xl text-copy font-themed "
					>
						{cta}
					</Link>
				))}
			</div>
		</motion.div>
	);
}
