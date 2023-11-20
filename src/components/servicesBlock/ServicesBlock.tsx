import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './ServicesBlock.module.scss'

const ServiceBlock: FC = () => {
	return (
		<div>
			<div>
				<div>
					<div className={styles.container}>
						<div className={styles.servicesBlock}>
							<div className={styles.gridBlock}>
								<div className={styles.servicesBlock}>
									<Link to='#' className={styles.linkGroup}>
										<div>
											<h5 className={styles.h5}>
												<span className='font-bold  mr-0.5 ml-0'>—</span>
												Хостинг
												<span className=' font-normal text-[1rem] mr-0'>
													от &nbsp;
												</span>
												<span className='font-medium ml-0 mr-0'> 320 ₽</span>
											</h5>
											<div className={styles.p}>
												<p>
													Готовое решение для размещения интернет-проектов без
													необходимости администрировать сервер
												</p>
											</div>
											<div className='mt-auto'>
												<div className={styles.btn}>Попробовать бесплатно</div>
											</div>
										</div>
									</Link>
								</div>
								<div className={styles.servicesBlock}>
									<Link to='#'>
										<div>
											<h5 className={styles.h5}>
												<span className='font-bold  text-[#000] mr-0.5 ml-0'>
													—
												</span>
												Хостинг
												<span className=' font-normal text-[1rem] mr-0'>
													от
												</span>
												<br />
												<span className='font-medium ml-0'>320 ₽</span>
											</h5>
											<div>
												<p></p>
											</div>
											<div>
												<div></div>
											</div>
										</div>
									</Link>
								</div>
								<div className={styles.servicesBlock}>
									<Link to='#'>
										<div>
											<h5 className={styles.h5}>
												<span className='font-bold  text-[#000] mr-0.5 ml-0'>
													—
												</span>
												Хостинг
												<span className=' font-normal text-[1rem] mr-0'>
													от
												</span>
												<br />
												<span className='font-medium ml-0'>320 ₽</span>
											</h5>
											<div>
												<p></p>
											</div>
											<div>
												<div></div>
											</div>
										</div>
									</Link>
								</div>
								<div className={styles.servicesBlock}>
									<Link to='#'>
										<div>
											<h5 className={styles.h5}>
												<span className='font-bold  text-[#000] mr-0.5 ml-0'>
													—
												</span>
												Хостинг
												<span className=' font-normal text-[1rem] mr-0'>
													от
												</span>
												<br />
												<span className='font-medium ml-0'>320 ₽</span>
											</h5>
											<div>
												<p></p>
											</div>
											<div>
												<div></div>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServiceBlock
