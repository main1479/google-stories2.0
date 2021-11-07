import React, { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
export default function FeatureSlide({ title, description, updateActiveImage, index }) {
	const ref = useRef(null);
	const onScreen = useOnScreen(ref);

	useEffect(() => {
		if (onScreen) {
			updateActiveImage(index);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [onScreen, index]);
	return (
		<div className="feature-slide" ref={ref}>
			<h3 className="feature-slide-title">{title}</h3>
			<p className="feature-slide-description">{description}</p>
		</div>
	);
}
