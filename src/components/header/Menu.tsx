import { FC } from 'react'
import { Link } from 'react-router-dom'

const menuItems = ['ХОСТИНГ', 'VPS', 'СЕРВЕРЫ', 'ДОМЕНЫ', 'CMS', 'SSL']

const Menu: FC = () => {
	return (
		<div className='flex'>
			<nav>
				{menuItems.map((item, idx) => (
					<Link
						to='#'
						key={idx}
						className='mr-[10px] text-[0.95rem] font-normal  px-0 py-[3px]'
					>
						{item}
					</Link>
				))}
			</nav>
		</div>
	)
}

export default Menu
