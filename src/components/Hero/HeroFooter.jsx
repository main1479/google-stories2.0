import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

export default function HeroFooter() {
	const text = useRef(null);
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: text.current,
				start: 'top +=200',
			},
		});
		tl.fromTo(
			'.hero-footer-text .line span',
			{
				opacity: 0,
				y: 300,
				skewY: 10,
			},
			{
				duration: 1,
				y: 0,
				opacity: 1,
				skewY: 0,
				ease: 'power2',
				color: '#fff',
				stagger: {
					amount: 0.4,
				},
			}
		).to(
			'.hero-footer-text .line span.outline__text',
			{
				duration: 0,
				color: 'transparent',
				webkitTextStrokeColor: '#fff',
			},
			'-=0.5'
		);
	}, []);
	return (
		<div className="hero-text-section" ref={text}>
			<h1 className="hero-footer-text">
				<div className="line">
					<span>Visual stories that</span>
				</div>{' '}
				<div className="line">
					<span className="outline__text">feel like yours,</span>
				</div>{' '}
				<div className="line">
					<span>because they are.</span>
				</div>
			</h1>
		</div>
	);
}
