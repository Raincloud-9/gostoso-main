import { InfoSectionContent } from "@/constants";
import Link from "next/link";
import React from "react";

export default function InfoSection() {
	const { title, times1, times2, ctas } = InfoSectionContent;
	return (
		<section className='relative bg-[url("/images/bg1.jpeg")] bg-cover bg-center bg-fixed bg-opacity-20  w-full'>
			<div className="absolute top-0 left-0 bg-black bg-opacity-60 w-full h-full" />
			<div className="relative w-full mx-auto py-52 px-6 text-center md:px-16 max-w-[1440px]">
				<div className="flex flex-col gap-10 items-center text-background">
					<h1 className="  max-w-[600px] uppercase text-6xl  sm:text-7xl leading-none font-themed ">
						{title}
					</h1>
					<div>
						<h6 className="text-primary text-3xl font-bold">Terça - Sexta</h6>
						<p className="text-2xl">{times1}</p>
					</div>
					<div>
						<h6 className="text-primary text-3xl font-bold">Sabado</h6>
						<p className="text-2xl">{times2}</p>
					</div>
					<div>
						<h6 className="text-primary text-3xl font-bold">Domingo</h6>
						<p className="text-2xl">{times1}</p>
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
				</div>
			</div>
		</section>
	);
}
