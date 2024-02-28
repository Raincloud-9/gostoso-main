export default function Video({ src }) {
	return (
		<video
			className=" object-cover absolute -z-10 top-0 left-0 w-full h-full "
			loop
			autoPlay
			muted
		>
			<source src={src} />
		</video>
	);
}
