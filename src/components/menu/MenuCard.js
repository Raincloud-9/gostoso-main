"use client";
import Image from "next/image";
import MenuModal from "./MenuModal";
import { useState } from "react";

export default function MenuCard({ name, img, desc, price }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div
			onClick={() => setIsOpen(true)}
			className="relative flex flex-col items-center justify-between gap-5 p-5 bg-foreground rounded-md shadow-md cursor-pointer"
		>
			<div className="absolute top-3 right-3 rounded-full bg-primary p-2 flex items-center justify-center">
				{price}
			</div>
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
				<p title={desc} className="text-copy-light line-clamp-3">
					{desc}
				</p>
			</div>
			<MenuModal
				name={name}
				img={img}
				desc={desc}
				price={price}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
		</div>
	);
}
