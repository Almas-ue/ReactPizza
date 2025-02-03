import Filter from '@/components/ui/filter'
import Categorias from '../widgets/categorias'
import Header from '../widgets/Header/Header'
import Container from '@/components/ui/container'
import Pizzas from '@/widgets/listPizza/Pizzas'
import PaginationPages from '@/widgets/pages/PaginationPages'

const App = () => {

  return (
    <>
      <Header />
      <Categorias />
      <Container className="flex gap-[48px] mt-9">
        <Filter />
        <Pizzas />
      </Container>
      <Container className='pt-[70px] pb-[58px]'>
        <PaginationPages />
      </Container>
    </>
  )
}

export default App
