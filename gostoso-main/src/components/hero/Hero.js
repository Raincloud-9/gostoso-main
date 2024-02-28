import { HeroContent } from "@/constants";
import Video from "./Video";
import AnimateContent from "./AnimateContent";

export default function Hero() {
	const { backgroundVideo, title, copy1, copy2, ctas } = HeroContent;
	return (
		<section className="relative h-full min-h-[100svh] md:min-h-[70vh]  flex ">
			<div className="absolute top-0 left-0 bg-black bg-opacity-60 w-full h-full" />
			<Video src={backgroundVideo} />
			<AnimateContent title={title} copy1={copy1} copy2={copy2} ctas={ctas} />
		</section>
	);
}
