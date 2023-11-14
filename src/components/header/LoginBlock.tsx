import { FC } from 'react'
import { Link } from 'react-router-dom'
import arrowIcon from '../../assets/icons/arrow.svg'
import payIcon from '../../assets/icons/pay.svg'
import phoneIcon from '../../assets/icons/phone.svg'
import DropdownMenu from '../dropdownMenu/DropdownMenu'
import styles from './LoginBlock.module.scss'

const LoginBlock: FC = () => {
	return (
		<div className='flex items-center'>
			<div>
				<div>
					<Link className={styles.pay} to='#'>
						<img src={payIcon} />
						<span className='mx-1'>Оплата</span>
					</Link>
				</div>
			</div>
			<div className='mr-3'>
				<div className='dropdown'>
					<DropdownMenu />
				</div>
				<div className=''></div>
				<Link
					to='#'
					className='flex items-center'
					onClick={() => {
						console.log('click')
					}}
				>
					<img src={phoneIcon} />
					<span className='mx-1 text-[0.9rem]'>8 (800) 700-06-08</span>
					<img src={arrowIcon} />
				</Link>
			</div>
			<div className='flex'>
				<Link
					to='#'
					className='ml-3 uppercase min-w-[120px] text-[0.6rem] py-1.5 text-center text-mainBlue border border-mainBlue hover:bg-mainBlue hover:text-[#fff]'
				>
					вход
				</Link>
				<button className='ml-3 uppercase text-[0.6rem] bg-mainBlack text-[#fff] min-w-[120px] hover:bg-[#000]'>
					регистрация
				</button>
			</div>
			<div></div>
		</div>
	)
}

export default LoginBlock
