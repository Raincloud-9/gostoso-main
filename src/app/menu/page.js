import MenuCard from "@/components/menu/MenuCard";
import TopHeader from "@/components/topHeader/TopHeader";
import { menu, menuContent } from "@/constants";

export default function Menu() {
	const { title, copy1, copy2 } = menuContent;
	return (
		<div>
			<TopHeader title="Menu" backgroundVideo="/videos/vid_2.mp4" />
			<section className="relative w-full mx-auto pt-24 pb-52  px-6 text-center md:px-16 max-w-[1440px]">
				<div className="mb-32">
					<h3 className="font-themed text-6xl mb-8 leading-tight sm:text-7xl capitalize">
						{title}
					</h3>
					<p className="text-copy-light text-lg">{copy1}</p>

					<br />
					<p className="text-copy-light text-lg">{copy2}</p>
				</div>
				<div className="flex flex-col items-center gap-16">
					<h3 className="font-themed text-6xl  sm:text-7xl capitalize">
						{menu[0].title}
					</h3>
					<div className="w-full grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-5">
						{menu[0].items.map(({ name, img, desc, price }, index) => (
							<MenuCard
								key={index}
								name={name}
								img={img}
								desc={desc}
								price={price}
							/>
						))}
					</div>
					<h3 className="font-themed text-6xl truncate w-full  sm:text-7xl capitalize">
						{menu[1].title}
					</h3>
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
						{menu[1].items.map(({ name, img, desc, price }, index) => (
							<MenuCard
								key={index}
								name={name}
								img={img}
								desc={desc}
								price={price}
							/>
						))}
					</div>
					<h3 className="font-themed text-6xl  sm:text-7xl capitalize">
						{menu[2].title}
					</h3>
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
						{menu[2].items.map(({ name, img, desc, price }, index) => (
							<MenuCard
								key={index}
								name={name}
								img={img}
								desc={desc}
								price={price}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
