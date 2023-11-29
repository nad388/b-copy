import { FC } from 'react'

import styles from './FeatureCp.module.scss'

const FeatureCp: FC = () => {
	return (
		<div className='container px-[16px]'>
			<div id='feature-cp'>
				<div className={styles.featureRow}>
					<div className={styles.imgCol}>
						<div className={styles.img}></div>
					</div>
					<div className={styles.titleCol}>
						<h1 className={styles.blockTitle}>
							Ваше время
							<span className={styles.smBlock}> имеет значение</span>
						</h1>
					</div>
					<div className={styles.textCol}>
						<p>
							<strong>
								Разместите ваш проект в сети за считанные минуты c помощью
								невероятно удобной панели управления.
							</strong>
						</p>
						<p>
							Мы уверены, что даже сложные технологии должны быть доступны
							в несколько кликов ради того, чтобы вы могли сосредоточиться
							на главном.
						</p>
						<div>
							Максимальная степень интеграции всех услуг позволяет легко
							подготовить инфраструктуру для любого проекта.
						</div>
					</div>
				</div>
				<div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div>
					<div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FeatureCp
