import { FC } from 'react'
import { Link } from 'react-router-dom'
import { linksFeature } from './FeatureCPLinks.data'
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
				<div className={styles.linksRow}>
					{linksFeature.map(link => (
						<div key={link.img} className={styles.mainLink}>
							<Link to='#' className={styles.linksFlex}>
								<span className='mr-3 ml-0'>
									<img src={link.img} className={styles.svg} />
								</span>
								{link.title}
							</Link>
						</div>
					))}
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
