import { FC } from 'react'
import styles from './ServersBlock.module.scss'

const ServersBlock: FC = () => {
	return (
		<div className={styles.servers}>
			<div>
				<h5 className={styles.h5}>
					<span className='font-bold  mr-0.5 ml-0'>—</span>
					Серверы
					<span className='font-normal text-[1rem] mr-0'>от &nbsp;</span>
					<br />
					<span className='font-medium ml-0 mr-0'>9300 ₽</span>
				</h5>
				<div>
					<p className={styles.serversText}>
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

export default ServersBlock
