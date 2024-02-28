import TopHeader from "@/components/topHeader/TopHeader";
import { HeroContent, encomendarContent } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { SiUbereats, SiJusteat } from "react-icons/si";

export default function Encomendar() {
	const { title, subtitle, ctas } = encomendarContent;
	return (
		<div>
			<TopHeader title="Encomendar" backgroundVideo="/videos/vid_2.mp4" />

			<section className="relative w-full mx-auto pt-24 pb-52  px-6 text-center md:px-16 max-w-[1440px]">
				<div className="flex flex-col items-center gap-16">
					<div className="text-center">
						<h3 className="font-themed text-6xl  sm:text-7xl capitalize">
							{title.toLowerCase()}
						</h3>
						<p className=" text-2xl text-copy-light">{subtitle}</p>
					</div>
					<div className="flex flex-col sm:flex-row sm:items-end items-center justify-center gap-10">
						<Link
							aria-label="Link to Uber"
							href="/"
							className="hover:text-primary transition-all "
						>
							<Image src="/images/Uber.svg" width={200} height={30} />
						</Link>

						<Link
							aria-label="Link to Bolt Food"
							href="/"
							className="hover:text-primary transition-all -mb-[5px] "
						>
							<Image src="/images/Bolt.svg" width={190} height={30} />
						</Link>
						<Link
							aria-label="Link to JustEat"
							href="/"
							className="hover:text-primary transition-all "
						>
							<Image src="/images/Glovo.svg" width={170} height={30} />
						</Link>
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
			</section>
		</div>
	);
}
