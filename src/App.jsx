import Header from "./components/Header/Header"
import Courses from "./components/Courses/Courses"
import Cart from "./components/Cart/Cart"

function App() {

  return (
    <>
      <Header></Header>
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] xl:grid-cols-[3fr_1fr] gap-6">
        <Courses></Courses>
        <Cart></Cart>
      </main>
    </>
  )
}

export default App
