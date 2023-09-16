import Header from "./components/Header/Header"
import Courses from "./components/Courses/Courses"
import Cart from "./components/Cart/Cart"
import { useState } from "react"

function App() {
  const [selectedCourse, setSelectedCourse] = useState([])
  const [creditRemaining, setCreditRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0)

  const handleSelectCourse = course => {
    if(selectedCourse.includes(course)){
      alert(`${course.title} already selected!`)
      return;
    }
    const newSelectedCourse = [...selectedCourse, course]
    setSelectedCourse(newSelectedCourse);

    setCreditRemaining(creditRemaining - course.credit)
    setTotalCredit(totalCredit + course.credit)
  }

  return (
    <>
      <Header></Header>
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] xl:grid-cols-[3fr_1fr] gap-6">
        <Courses handleSelectCourse={handleSelectCourse}></Courses>
        <Cart 
          selectedCourse={selectedCourse}
          creditRemaining={creditRemaining}
          totalCredit={totalCredit}
        ></Cart>
      </main>
    </>
  )
}

export default App
