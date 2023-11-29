import { FC } from 'react'
import styles from './PageBody.module.scss'
import FeatureCp from './featureCp/FeatureCp'

const PageBody: FC = () => {
	return (
		<div className={styles.pageBody}>
			<div className='page-section overflow mb-[12.5rem]'>
				<FeatureCp />
			</div>
			<div className='page-section'></div>
			<div className='page-section'></div>
			<div className='page-section'></div>
		</div>
	)
}

export default PageBody
