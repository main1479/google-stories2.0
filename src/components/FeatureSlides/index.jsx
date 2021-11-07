import React, { useEffect, useRef, useState } from 'react';
import { featureSlides } from '../../data';
import FeatureSlide from './FeatureSlide';
import cn from 'classnames';
import gsap from 'gsap';

function RenderImages({ activeFeatureIndex }) {
	return featureSlides.map(({ imageUrl }, index) => (
		<img
			className={cn({ 'as-primary': activeFeatureIndex === index })}
			key={imageUrl}
			src={imageUrl}
			alt=""
		/>
	));
}
export default function FeatureSlides() {
	const [activeFeatureIndex, setFeatureIndex] = useState(0);
	const ref = useRef(null);
	const slideText = useRef(null);

	useEffect(() => {
		const master = gsap.timeline();
		const stopTrigger = () => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: slideText.current,
					start: 'top top',
					end: `+=${ref.current.offsetHeight}`,
					scrub: true,
					pin: true,
				},
			});

			return tl;
		};

		master.add(stopTrigger());
	}, []);

	return (
		<div className="feature-slides-container" ref={ref}>
			<div className="feature-slides-left">
				{featureSlides.map((feature, index) => (
					<FeatureSlide
						updateActiveImage={setFeatureIndex}
						key={feature.imageUrl}
						title={feature.title}
						description={feature.description}
						index={index}
					/>
				))}
			</div>
			<div className="feature-slides-right" ref={slideText}>
				<RenderImages activeFeatureIndex={activeFeatureIndex} />
			</div>
		</div>
	);
}
