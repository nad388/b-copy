import { FC } from 'react'
// import btnArrow from '../../../assets/icons/btnArrow.svg'
import styles from './DomainsBlock.module.scss'

interface IZone {
	title: string
	price: number
}

const zones: IZone[] = [
	{ title: '.ru', price: 179 },
	{ title: '.com', price: 1300 },
	{ title: '.online', price: 600 },
	{ title: '.space', price: 220 },
]

const DomainsBlock: FC = () => {
	return (
		<div className={styles.domains}>
			<div>
				<h5>
					<span className='font-bold  mr-0.5 ml-0'>—</span>
					Домены
				</h5>
				<div>
					<div className='mb-1'>
						<form className='relative'>
							<input
								type='text'
								placeholder='Подберите лучший домен'
								autoComplete='off'
								autoCorrect='off'
								autoCapitalize='none'
								className={styles.searchInput}
							/>
							<button className={styles.inputBtn}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									fill='currentColor'
									viewBox='0 0 24 24'
									className={styles.inputBtnSvg}
								>
									<path d='M21.25 4c.41 0 .75.34.75.75v6.5A3.75 3.75 0 0 1 18.25 15H4.59l3.71 3.72c.27.27.3.68.08.98l-.08.08a.75.75 0 0 1-.97.07l-.09-.07-5-5a.75.75 0 0 1-.07-.98l.07-.08 5-5a.75.75 0 0 1 1.14.98l-.08.08-3.7 3.72h13.66c1.19 0 2.17-.93 2.24-2.1l.01-.15v-6.5c0-.41.34-.75.75-.75z' />
								</svg>
							</button>
						</form>
					</div>
					<div className={styles.zones}>
						{zones.map(zone => (
							<div key={zone.title} className={styles.zone}>
								<h5 className={styles.zoneTitle}>{zone.title}</h5>
								<div className={styles.zoneText}>
									<p>
										{zone.price} ₽ <span>в год</span>
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default DomainsBlock
