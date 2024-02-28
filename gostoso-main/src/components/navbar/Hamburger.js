"use client";
import { MobileContext } from "@/contexts/MobileNavContextProvider";
import { Squash } from "hamburger-react";
import { useContext } from "react";

export default function Hamburger() {
	const [isOpen, setIsOpen] = useContext(MobileContext);
	return (
		<div className="relative z-50 flex md:hidden ">
			<Squash
				rounded
				toggled={isOpen}
				toggle={setIsOpen}
				size={22}
				color="#fff"
			/>
		</div>
	);
}
