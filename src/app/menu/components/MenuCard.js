import Image from "next/image";

export default function MenuCard({ name, img, desc }) {
	return (
		<div className="flex flex-col w-full items-center justify-between gap-5 p-5 bg-foreground rounded-md shadow-md">
			<div className=" overflow-hidden rounded-full w-[100px] h-[100px] ">
				<Image
					alt={name}
					src={img}
					width={1000}
					height={1000}
					className="object-cover h-full "
				/>
			</div>
			<div className="flex flex-col gap-3">
				<h5
					title={name}
					className="font-themed text-4xl leading-tight line-clamp-1"
				>
					{name}
				</h5>
				<p title={desc} className="text-copy-light line-clamp-2">
					{desc}
				</p>
			</div>
		</div>
	);
}
