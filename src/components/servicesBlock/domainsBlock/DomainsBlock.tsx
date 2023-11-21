import { FC } from 'react'
// import btnArrow from '../../../assets/icons/btnArrow.svg'
import styles from './DomainsBlock.module.scss'

interface IZone {
	title: string
	price: number
}

const zones: IZone[] = [
	{ title: '.RU', price: 179 },
	{ title: '.COM', price: 1300 },
	{ title: '.ONLINE', price: 600 },
	{ title: '.SPACE', price: 220 },
]

const DomainsBlock: FC = () => {
	return (
		<div className={styles.domains}>
			<div>
				<h5 className={styles.h5}>
					<span className='font-bold  mr-0.5 ml-0'>—</span>
					Домены
				</h5>
				<div>
					<div className='mb-[1rem]'>
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
									className={styles.inputBtnSvg}
								>
									<path d='M21.25 4c.41 0 .75.34.75.75v6.5A3.75 3.75 0 0 1 18.25 15H4.59l3.71 3.72c.27.27.3.68.08.98l-.08.08a.75.75 0 0 1-.97.07l-.09-.07-5-5a.75.75 0 0 1-.07-.98l.07-.08 5-5a.75.75 0 0 1 1.14.98l-.08.08-3.7 3.72h13.66c1.19 0 2.17-.93 2.24-2.1l.01-.15v-6.5c0-.41.34-.75.75-.75z' />
								</svg>
							</button>
						</form>
					</div>
					<div className='flex'>
						{zones.map(zone => (
							<div key={zone.title}>
								<h5>{zone.title}</h5>
								<div>
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
