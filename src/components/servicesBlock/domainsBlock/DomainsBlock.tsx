import { FC } from 'react'
import styles from './DomainsBlock.module.scss'

const DomainsBlock: FC = () => {
	return (
		<div className={styles.domains}>
			<div>
				<h5 className={styles.h5}>
					<span className='font-bold  mr-0.5 ml-0'>—</span>
					Домены
				</h5>
				<div>
					<p>
						Серверные системы любой мощности и инфраструктура для проектов
						с особыми требованиями
					</p>
				</div>
				<div>
					<div className={styles.btn}>Подобрать сервер</div>
				</div>
			</div>
		</div>
	)
}

export default DomainsBlock
