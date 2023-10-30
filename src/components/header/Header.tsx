import { FC } from 'react'
import mainLogo from '../../assets/logo.svg'

const Header: FC = () => {
	return (
		<div className='p-[1rem]'>
			<img src={mainLogo} alt='logo' />
		</div>
	)
}

export default Header
