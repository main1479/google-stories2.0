import React, { useState } from 'react';
import { featureSlides } from '../../data';
import FeatureSlide from './FeatureSlide';
import cn from 'classnames';

function RenderImages({ activeFeatureIndex }) {
	return featureSlides.map(({ imageUrl }, index) => (
		<img
			className={cn({ 'as-primary': activeFeatureIndex === index })}
			key={imageUrl}
			style={{ backgroundImage: `url(${imageUrl})` }}
			alt=""
		/>
	));
}
export default function FeatureSlides() {
	const [activeFeatureIndex, setFeatureIndex] = useState(0);

	return (
		<div className="feature-slides-container">
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
			<div className="feature-slides-right">
				<RenderImages activeFeatureIndex={activeFeatureIndex} />
			</div>
		</div>
	);
}
