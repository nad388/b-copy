import { FC } from 'react'
import FeatureCp from './featureCp/FeatureCp'

const PageBody: FC = () => {
	return (
		<>
			<div className='page-section'>
				<FeatureCp />
			</div>
			<div className='page-section'></div>
			<div className='page-section'></div>
			<div className='page-section'></div>
		</>
	)
}

export default PageBody
