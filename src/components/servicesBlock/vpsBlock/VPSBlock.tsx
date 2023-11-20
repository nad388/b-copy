import { FC } from 'react'
import styles from './VPSBlock.module.scss'

const VPSBlock: FC = () => {
	return (
		<div className={styles.vps}>
			<div>
				<h5 className={styles.h5}>
					<span className='font-bold  mr-0.5 ml-0'>—</span>
					VPS
					<span className='font-normal text-[1rem] mr-0'>от &nbsp;</span>
					<br />
					<span className='font-medium ml-0 mr-0'>210 ₽</span>
				</h5>
				<div>
					<p>
						Производительные виртуальные серверы для любых задач на основе
						последнего поколения процессоров и бесплатными бекапами
					</p>
				</div>
				<div>
					<div className={styles.btn}>Подобрать сервер</div>
				</div>
			</div>
		</div>
	)
}

export default VPSBlock
