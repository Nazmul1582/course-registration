import Header from "./components/Header/Header"
import Courses from "./components/Courses/Courses"
import Cart from "./components/Cart/Cart"

function App() {

  return (
    <>
      <Header></Header>
      <main className="container mx-auto grid grid-cols-[3fr_1fr]">
        <Courses></Courses>
        <Cart></Cart>
      </main>
    </>
  )
}

export default App
