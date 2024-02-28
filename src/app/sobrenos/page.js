import TopHeader from "@/components/topHeader/TopHeader";
import { HeroContent, sobrenosContent } from "@/constants";
import Image from "next/image";

export default function SobreNos() {
	const { title, copy1, copy2, copy3, copy4 } = sobrenosContent;
	return (
		<div>
			<TopHeader title="SOBRE NÓS" backgroundVideo="/videos/vid_1.mp4" />
			<section className="relative w-full mx-auto py-32  px-6  md:px-16 max-w-[1440px]">
				<div className="flex flex-col lg:flex-row gap-10 items-center">
					<div className="flex text-center flex-col gap-5 text-copy ">
						<h3 className="font-themed text-6xl sm:text-7xl capitalize leading-tight">
							{title}
						</h3>
						<p className="text-lg text-copy-light">{copy1}</p>
						<p className="text-lg text-copy-light">{copy2}</p>
						<p className="text-lg text-copy-light">{copy3}</p>
						<p className="text-lg text-copy-light">{copy4}</p>
					</div>
					<div className={` flex-[130%] rounded-full shadow-lg  bg-black `}>
						<Image
							priority
							alt="logo"
							src="/images/logo.png"
							width={500}
							height={500}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
