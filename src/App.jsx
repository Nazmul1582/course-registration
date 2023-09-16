import Header from "./components/Header/Header"
import Courses from "./components/Courses/Courses"
import Cart from "./components/Cart/Cart"
import { useState } from "react"

function App() {
  const [selectedCourse, setSelectedCourse] = useState([])
  const [creditRemaining, setCreditRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [toast, setToast] = useState("")

  const handleSelectCourse = course => {
    if(selectedCourse.includes(course)){
      setToast(`${course.title} already selected!`)
      return;
    }
    
    if(creditRemaining - course.credit >= 0){
      // credit remaining, total credit and total price
      setCreditRemaining(creditRemaining - course.credit)
      setTotalCredit(totalCredit + course.credit)
      setTotalPrice(totalPrice + course.price)

      // selected course
      const newSelectedCourse = [...selectedCourse, course]
      setSelectedCourse(newSelectedCourse);
    }else{
      setToast(`Sorry! Credit Hour Remaining can't be less than 0 and Total Credit Hour can't be more than 20`)
    }
  }

  return (
    <>
      <Header></Header>
      {
        toast && (
          <div className="toast toast-top toast-end">
            <div className="alert alert-error">
              <span>{toast}</span>
            </div>
          </div>
        )
      }
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] xl:grid-cols-[3fr_1fr] gap-6">
        <Courses handleSelectCourse={handleSelectCourse}></Courses>
        <Cart 
          selectedCourse={selectedCourse}
          creditRemaining={creditRemaining}
          totalCredit={totalCredit}
          totalPrice={totalPrice}
        ></Cart>
      </main>
    </>
  )
}

export default App
