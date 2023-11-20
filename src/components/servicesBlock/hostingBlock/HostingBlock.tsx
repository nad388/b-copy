import { FC } from 'react'
import styles from './HostingBlock.module.scss'

const HostingBlock: FC = () => {
	return (
		<div className={styles.hosting}>
			<div>
				<h5>
					<span className='font-bold  mr-0.5 ml-0'>—</span>
					Хостинг
					<span className=' font-normal text-[1rem] mr-0'>от &nbsp;</span>
					<span className='font-medium ml-0 mr-0'> 320 ₽</span>
				</h5>
				<div>
					<p>
						Готовое решение для размещения интернет-проектов без необходимости
						администрировать сервер
					</p>
				</div>
				<div className='mt-auto'>
					<div className={styles.btn}>Попробовать бесплатно</div>
				</div>
			</div>
		</div>
	)
}

export default HostingBlock
