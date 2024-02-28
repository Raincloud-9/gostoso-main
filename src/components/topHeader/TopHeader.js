import AnimateContent from "./AnimateContent";
import Video from "../hero/Video";

export default function TopHeader({ title, subtitle, backgroundVideo }) {
	return (
		<div className="relative h-full min-h-[30svh] md:min-h-[30vh]  flex ">
			<div className="absolute top-0 left-0 bg-black bg-opacity-60 w-full h-full" />
			<Video src={backgroundVideo} />
			<AnimateContent title={title} subtitle={subtitle} />{" "}
		</div>
	);
}
