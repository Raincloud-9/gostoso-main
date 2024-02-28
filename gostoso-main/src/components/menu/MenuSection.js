import { HeroContent, menu } from "@/constants";
import React from "react";
import MenuCard from "./MenuCard";
import Link from "next/link";

export default function MenuSection() {
	return (
		<section className="relative w-full mx-auto pt-24 pb-52  px-6 text-center md:px-16 max-w-[1440px]">
			<div className="flex flex-col items-center gap-16">
				<h3 className="font-themed text-6xl  sm:text-7xl capitalize">Menu</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{menu[0].items
						.slice(0, 4)
						.map(({ name, img, desc, price }, index) => (
							<MenuCard
								key={index}
								name={name}
								img={img}
								desc={desc}
								price={price}
							/>
						))}
				</div>
				<div className="flex gap-7 w-full max-w-[500px]">
					{HeroContent.ctas.map((cta, index) => (
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
			</div>
		</section>
	);
}
