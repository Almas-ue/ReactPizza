import Filter from '@/components/ui/filter'
import Categorias from '../widgets/categorias'
import Header from '../widgets/Header/Header'
import Container from '@/components/ui/container'

const App = () => {

  return (
    <>
      <Header />
      <Categorias />
      <Container className="mt-9">
        <Filter />
      </Container>
    </>
  )
}

export default App
