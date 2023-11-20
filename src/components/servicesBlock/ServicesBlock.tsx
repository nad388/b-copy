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
								<Link to='#' className={styles.linkGroup}>
									<HostingBlock />
								</Link>

								<Link to='#' className={styles.linkGroup}>
									<VPSBlock />
								</Link>

								<Link to='#' className={styles.linkGroup}>
									<ServersBlock />
								</Link>

								<Link to='#' className={styles.linkGroup}>
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
