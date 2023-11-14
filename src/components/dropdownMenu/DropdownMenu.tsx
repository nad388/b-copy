import { FC } from 'react'
import DropdownItem from './DropdownItem'
import styles from './DropdownMenu.module.scss'

const DropdownMenu: FC = () => {
	return (
		<div className={styles.dropdownMenu}>
			<DropdownItem />
		</div>
	)
}

export default DropdownMenu
