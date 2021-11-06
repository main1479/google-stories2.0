import gsap from 'gsap';
import React, { useEffect } from 'react';
export default function HeroHeader() {
	useEffect(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			'#hero-text .line span',
			{
				opacity: 0,
				y: 300,
				skewY: 10,
				delay: -1,
			},
			{
				duration: 1,
				y: 0,
				opacity: 1,
				skewY: 0,
				delay: 1,
				ease: 'power2',
				stagger: {
					amount: 0.4,
				},
			}
		);
	}, []);
	return (
		<div className="hero-text-section">
			<h1 id="hero-text">
				<div className="line">
					<span>Stories meet their</span>
				</div>{' '}
				<div className="line">
					<span className="outline__text">wides audience</span>
				</div>{' '}
				<div className="line">
					<span>ever</span>
				</div>
			</h1>
		</div>
	);
}
