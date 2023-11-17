import { FC } from 'react'
import styles from './Modal.module.scss'
import ModalItem from './ModalItem'

interface ModalProps {
	active: boolean
	onClose: () => void
}

const ModalMenu: FC<ModalProps> = ({ active, onClose }) => {
	if (!active) return null
	return (
		<div className={styles.modal} onClick={onClose}>
			<div className={styles.modalContent} onClick={e => e.stopPropagation()}>
				<ModalItem />
			</div>
		</div>
	)
}

export default ModalMenu
