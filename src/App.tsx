import Header from './components/header/Header'
import PageBody from './components/pageBody/PageBody'
import ServiceBlock from './components/servicesBlock/ServicesBlock'

function App() {
	return (
		<>
			<div className='containerBody'>
				<div className='container'>
					<Header />
					<ServiceBlock />
					<PageBody />
				</div>
			</div>
		</>
	)
}

export default App
