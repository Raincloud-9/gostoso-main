import { FaPhone } from "react-icons/fa6";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { SiUbereats, SiJusteat } from "react-icons/si";
import Link from "next/link";
import { businessInfo } from "@/constants";
import Image from "next/image";

export default function Footer() {
	const { location, locationLink, email, tel } = businessInfo;
	return (
		<footer className=" mt-auto h-full w-full bg-black">
			<div className="flex flex-col md:flex-row items-start  gap-16 w-full max-w-[1440px] mx-auto py-32 px-6 md:px-16">
				<div className="flex flex-col gap-4 text-background">
					<h6 className="text-3xl font-themed uppercase">O Gostoso Nagrela</h6>
					<Link
						aria-label="Link to location "
						href={locationLink}
						className="font-light  hover:text-primary transition-all"
					>
						{location}
					</Link>
				</div>
				<div className="flex flex-col gap-4 text-background">
					<h6 className="text-3xl font-themed uppercase">Contactos</h6>
					<Link
						aria-label="Contact through email"
						href={`mailto:${email}`}
						className="group flex items-center gap-3 font-light hover:text-primary transition-all "
					>
						<IoIosMail />
						<p className=" ">{email}</p>
					</Link>
					<Link
						aria-label="Contact through telephone"
						href={`tel:${tel}`}
						className="group flex items-center gap-3 font-light hover:text-primary transition-all "
					>
						<FaPhone />
						<p className=" ">{tel}</p>
					</Link>
				</div>
				<div className="flex flex-col gap-4 text-background">
					<h6 className="text-3xl font-themed uppercase">Social</h6>
					<div className="flex gap-3">
						<Link
							aria-label="Link to Facebook"
							href="/"
							className="hover:text-primary transition-all "
						>
							<FaFacebook />
						</Link>
						<Link
							aria-label="Link to IG"
							href="/"
							className="hover:text-primary transition-all "
						>
							<AiFillInstagram />
						</Link>
						<Link
							aria-label="Link to TikTok"
							href="/"
							className="hover:text-primary transition-all "
						>
							<FaTiktok />
						</Link>
					</div>
					<h6 className="text-3xl font-themed uppercase">Encomendar</h6>

					<div className="flex bg-background p-2 rounded-md items-end gap-3">
						<Link
							aria-label="Link to Uber"
							href="/"
							className="hover:text-primary transition-all "
						>
							<Image src="/images/Uber.svg" width={100} height={30} />
						</Link>

						<Link
							aria-label="Link to Bolt Food"
							href="/"
							className="hover:text-primary transition-all -mb-[5px] "
						>
							<Image src="/images/Bolt.svg" width={90} height={30} />
						</Link>
						<Link
							aria-label="Link to JustEat"
							href="/"
							className="hover:text-primary transition-all "
						>
							<Image src="/images/Glovo.svg" width={70} height={30} />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
