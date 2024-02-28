import Hero from "@/components/hero/Hero";
import InfoSection from "@/components/info/InfoSection";
import Loyalty from "@/components/loyalty/Loyalty";
import MenuSection from "@/components/menu/MenuSection";

export default function Home() {
	return (
		<main>
			<Hero />
			<Loyalty />
			<MenuSection />
			<InfoSection />
		</main>
	);
}
