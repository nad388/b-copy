import { FC } from 'react'
import { Link } from 'react-router-dom'
import kievFlag from '../../assets/otherIcons/kiev.svg'
import kzFlag from '../../assets/otherIcons/kz.svg'
import mskFlag from '../../assets/otherIcons/msk.svg'
import ruFlag from '../../assets/otherIcons/ru.svg'
import spbFlag from '../../assets/otherIcons/spb.svg'
import ukrFlag from '../../assets/otherIcons/ukraine.svg'

import styles from './ModalItem.module.scss'

interface IPhone {
	flag: string
	country: string
	phoneNumber: string
}

const phones: IPhone[] = [
	{ flag: ruFlag, country: 'Россия', phoneNumber: '8 (800) 700-06-08' },
	{
		flag: spbFlag,
		country: 'Санкт-Петербург',
		phoneNumber: '+7 (812) 385-41-36',
	},
	{ flag: mskFlag, country: 'Москва', phoneNumber: '+7 (495) 721-80-88' },
	{ flag: ukrFlag, country: 'Украина', phoneNumber: '0 (800) 802-192' },
	{ flag: kievFlag, country: 'Киев', phoneNumber: '+380 (44) 300-02-18' },
	{ flag: kzFlag, country: 'Казахстан', phoneNumber: '+7 (727) 313-24-02' },
]

const ModalItem: FC = () => {
	return (
		<div>
			{phones.map(item => (
				<div key={item.flag}>
					<Link to={item.phoneNumber}>
						<div className={styles.dropdown}>
							<div>
								<div>
									<img src={item.flag} alt='' />
								</div>
							</div>
							<div>{item.country}</div>
							<div>{item.phoneNumber}</div>
						</div>
					</Link>
				</div>
			))}
		</div>
	)
}

export default ModalItem
