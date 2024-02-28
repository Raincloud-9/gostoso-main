import TopHeader from "@/components/topHeader/TopHeader";
import { HeroContent, businessInfo } from "@/constants";
import Link from "next/link";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import Map from "./components/Map";

export default function Contactos() {
	const { location, locationLink, email, tel } = businessInfo;
	return (
		<div>
			<TopHeader title="Contactos" backgroundVideo="/videos/vid_3.mp4" />
			<section className="relative w-full mx-auto py-32  px-6 text-center md:px-16 max-w-[1440px]">
				<div className="flex flex-col md:flex-row gap-10 items-center">
					<div className="flex flex-[50%] flex-col gap-10 text-copy ">
						<div>
							<p className="text-lg text-copy-light">Adorávamos ajudá-lo!</p>
							<br />
							<h3 className="font-themed text-6xl  sm:text-7xl capitalize leading-[1]">
								Fale connosco
							</h3>
						</div>
						<div>
							<Link
								aria-label="Contact through telephone"
								href={`tel:${tel}`}
								className="group flex items-center justify-center gap-3 font-light hover:text-primary transition-all "
							>
								<FaPhone size={30} />
								<p className=" ">{tel}</p>
							</Link>
							<br />
							<Link
								aria-label="Link to location "
								href={locationLink}
								className="group flex items-start justify-center gap-3 font-light hover:text-primary transition-all "
							>
								<FaLocationDot size={30} />
								<p className=" max-w-[300px]">{location}</p>
							</Link>
						</div>
					</div>
					<Map />
					{/* <iframe
						src="https://www.google.com/maps/embed?pb=!4v1708094534967!6m8!1m7!1sF7OPvRqkSwBG1fLZwJkWJw!2m2!1d38.66189169838213!2d-9.050940149696075!3f98.2962!4f0!5f0.7820865974627469"
						width="800"
						height="600"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe> */}
				</div>
			</section>
		</div>
	);
}
