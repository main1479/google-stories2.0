import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

export default function HeroFooter() {
	const text = useRef(null);
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: text.current,
				start: 'top +=400',
				scrub: true,
			},
		});
		tl.to('.hero-container', { backgroundColor: '#fff', duration: 0.2 });
	}, []);
	return (
		<div className="hero-text-section" ref={text}>
			<h1 id="hero-footer-text">
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
