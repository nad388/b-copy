import backIcon from '../../../assets/icons/backup.svg'
import cmsIcon from '../../../assets/icons/cms.svg'
import fileIcon from '../../../assets/icons/file.svg'
import mobPayIcon from '../../../assets/icons/mobPay.svg'
import partnerIcon from '../../../assets/icons/partner.svg'
import sslIcon from '../../../assets/icons/ssl.svg'

interface ILinksFeature {
	title: string
	img: string
}

export const linksFeature: ILinksFeature[] = [
	{
		title: 'Встроенный файловый менеджер',
		img: fileIcon,
	},
	{
		title: 'Бесплатные SSL-сертификаты',
		img: sslIcon,
	},
	{
		title: 'Автоматическое резервное копирование',
		img: backIcon,
	},
	{
		title: 'Моментальная оплата через Apple Pay / Google Pay',
		img: mobPayIcon,
	},
	{
		title: 'До 40% с каждого платежа по партнерской программе',
		img: partnerIcon,
	},
	{
		title: 'Автоматическая установка CMS и другого ПО',
		img: cmsIcon,
	},
]
