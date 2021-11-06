import React from 'react';
// import useOnScreen from '../../hooks/useOnScreen';
export default function FeatureSlide({ title, description, updateActiveImage, index }) {
	return (
		<div className="feature-slide">
			<h3 className="feature-slide-title">{title}</h3>
			<p className="feature-slide-description">{description}</p>
		</div>
	);
}
