"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import { useMemo } from "react";
import { businessInfo } from "@/constants";
import Link from "next/link";

export default function Map() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API,
	});

	const center = useMemo(
		() => ({ lat: 38.66201559035305, lng: -9.050817116829371 }),
		[]
	);

	return (
		<div className="w-full  h-full max-h-[600px]">
			{!isLoaded ? (
				<h6 className=" text-2xl animate-pulse">Loading...</h6>
			) : (
				<Link aria-label="Link to location" href={businessInfo.locationLink}>
					<GoogleMap
						mapContainerStyle={{
							width: "100%",
							height: "500px",
						}}
						center={center}
						zoom={19}
					>
						<Marker
							key={1}
							position={{ lat: 38.66201559035305, lng: -9.050817116829371 }}
						/>
					</GoogleMap>
				</Link>
			)}
		</div>
	);
}
