import React, { Suspense } from 'react';
import { PreLoader } from '../containers/Main';
import '../styles/home.scss';

//

const Home = React.lazy(() => import('../containers/Main'));

const Index = () => {
	return (
		<>
			<Suspense fallback={<PreLoader />}>
				<Home />
			</Suspense>
		</>
	);
};
export default Index;
