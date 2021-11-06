import gsap from 'gsap';
import React, { useEffect } from 'react';

import { videos, photos } from '../../data';
function VideoElement({ src }) {
	return (
		<div className="hero-element">
			<video
				className="collage-element"
				autoPlay
				playsInline
				loop
				poster="https://lh3.googleusercontent.com/AJYQSvDZk4lqSWgBeiKFnE6OXdWWp8up4UdugQPqDVqpV4sW4DOtxzOTcuMJYlU771xp4nhG4mCUrOcPM3HiEbxns9QpTz90wLe13w=s0"
				src={src}
			></video>
		</div>
	);
}
function ImageElement({ src }) {
	return (
		<div className="hero-element">
			<img src={src} className="collage-element" alt="" />
		</div>
	);
}
export default function HeroCollage() {
	const leftImages = photos.slice(0, 2);
	const rightImages = photos.slice(2, photos.length);
	const [leftVideo, rightVideo] = videos;
	useEffect(() => {
		const tl = gsap.timeline({
			// delay: 0.5,
			scrollTrigger: {
				trigger: '.hero-phone-block',
				start: 'top +=100',
				// scrub: true,
			},
		});

		tl.from('.hero-element', {
			y: 300,
			opacity: 0,
			duration: 0.8,
			stagger: 0.1,
		});
	}, []);
	return (
		<div className="hero-collage">
			<div className="left-column">
				{leftImages.map((src) => (
					<ImageElement key={src} src={src} />
				))}
				<VideoElement src={leftVideo} />
			</div>
			<div className="right-column">
				<VideoElement src={rightVideo} />
				{rightImages.map((src) => (
					<ImageElement key={src} src={src} />
				))}
			</div>
		</div>
	);
}
