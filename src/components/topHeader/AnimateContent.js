"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import TypingInfinity from "../TypingInfinity";

export default function AnimateContent({ title, subtitle }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className="relative z-10 flex flex-col gap-24 items-center justify-center  mx-auto pt-52 pb-32  px-6 text-center md:px-16 max-w-[1440px]"
		>
			<div className=" flex flex-col items-center gap-10 ">
				<h1 className=" text-background max-w-[500px] text-6xl sm:text-8xl md:text-10xl leading-none font-themed uppercase ">
					{title}
				</h1>
				<TypingInfinity
					title='"A fililicidae esta no sabor"'
					styles="text-reg sm:text-2xl text-primary uppercase "
				/>
			</div>
		</motion.div>
	);
}
