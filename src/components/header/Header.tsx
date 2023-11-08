import { FC } from 'react'
import mainLogo from '../../assets/logo.svg'
import LoginBlock from './LoginBlock'
import Menu from './Menu'

const Header: FC = () => {
	return (
		<div className='p-[1rem] '>
			<div className='flex justify-between items-center'>
				<img src={mainLogo} alt='logo' />
				<Menu />
				<LoginBlock />
			</div>
		</div>
	)
}

export default Header
