"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function MenuModal({
	name,
	img,
	desc,
	price,
	isOpen,
	setIsOpen,
}) {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={(e) => {
						e.stopPropagation();
						setIsOpen(false);
					}}
					className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
				>
					<motion.div
						initial={{ scale: 0, rotate: "12.5deg" }}
						animate={{ scale: 1, rotate: "0deg" }}
						exit={{ scale: 0, rotate: "0deg" }}
						onClick={(e) => e.stopPropagation()}
						className="bg-foreground text-copy p-5 rounded-md w-full max-w-[300px]  shadow-md cursor-default relative "
					>
						{/* <div
                    onClick={() => setIsOpen(false)}
                    className="absolute right-3 bg-primary-content p-2 rounded-full top-2 cursor-pointer z-30"
                >
                    <IoClose fill="white" size={20} />
                </div> */}
						<div className="absolute top-3 right-3 rounded-full bg-primary p-2 flex items-center justify-center">
							{price}
						</div>
						<div className="relative flex flex-col items-center justify-between gap-5  ">
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
									className="font-themed text-4xl leading-tight "
								>
									{name}
								</h5>
								<p title={desc} className="text-copy-light ">
									{desc}
								</p>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
