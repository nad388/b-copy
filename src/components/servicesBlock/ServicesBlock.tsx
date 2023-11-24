import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './ServicesBlock.module.scss'
import DomainsBlock from './domainsBlock/DomainsBlock'
import HostingBlock from './hostingBlock/HostingBlock'
import ServersBlock from './serversBlock/ServersBlock'
import VPSBlock from './vpsBlock/VPSBlock'

const ServiceBlock: FC = () => {
	return (
		<div>
			<div>
				<div>
					<div className={styles.containerBlock}>
						<div className={styles.servicesBlock}>
							<div className={styles.gridBlock}>
								<Link to='#'>
									<HostingBlock />
								</Link>
								<Link to='#'>
									<VPSBlock />
								</Link>
								<Link to='#'>
									<ServersBlock />
								</Link>
								<Link to='#' className='ml-0 mr-0 mb-3'>
									<DomainsBlock />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServiceBlock
