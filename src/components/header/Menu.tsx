import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const menuItems = ['хостинг', 'VPS', 'серверы', 'домены', 'CMS', 'SSL']

const Menu: FC = () => {
	return (
		<div className='flex'>
			<nav>
				{menuItems.map((item, idx) => (
					<Link to='#' key={idx} className={styles.menu}>
						{item}
					</Link>
				))}
			</nav>
		</div>
	)
}

export default Menu
