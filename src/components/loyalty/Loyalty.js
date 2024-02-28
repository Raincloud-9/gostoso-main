import { LoyaltySection } from "@/constants";
import LoyaltyGrid from "./LoyaltyGrid";

export default function Loyalty() {
	const { title, copy } = LoyaltySection;
	return (
		<section className="relative w-full mx-auto py-52  px-6 text-center md:px-16 max-w-[1440px]">
			<div className="flex flex-col-reverse md:flex-row gap-10 items-center">
				<LoyaltyGrid />
				<div className="flex flex-col gap-5 text-copy ">
					<h3 className="font-themed text-6xl  sm:text-7xl capitalize leading-tight">
						{title}
					</h3>
					<p className="text-lg text-copy-light">{copy}</p>
				</div>
			</div>
		</section>
	);
}
