import { FC } from 'react'
import { Link } from 'react-router-dom'
import mainLogo from '../../assets/logo.svg'
import LoginBlock from './LoginBlock'
import Menu from './Menu'

const Header: FC = () => {
	return (
		<div className='p-[1rem] '>
			<div className='flex items-center'>
				<div className='flex row items-center justify-between'>
					<Link to='/'>
						<img src={mainLogo} alt='logo' className='pr-10' />
					</Link>

					<Menu />
				</div>

				<LoginBlock />
			</div>
		</div>
	)
}

export default Header
