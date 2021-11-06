import React, { useState, useEffect } from 'react';
import FeatureSlides from '../components/FeatureSlides';
import Hero from '../components/Hero';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger);

export const PreLoader = () => <div className="loader">Loading...</div>;
export default function Main() {
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 500);
	}, []);

	return loader ? (
		<PreLoader />
	) : (
		<div>
			<Hero /> <FeatureSlides />
			<div className="footer">Build your ideal story today.</div>
		</div>
	);
}
