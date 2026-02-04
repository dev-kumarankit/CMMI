
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SizeUpdate from './type/size-update/sizeUpdate'
import Header from './components/header/header'
import CodeReviewSubmit from './type/review-code/CodeReviewSubmit'
import AssignPerson from './type/assign-person/AssignPerson'
import AddComments from './type/add-comments/AddComments'

function App() {

  return (
 <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<SizeUpdate />} />
        <Route path="/size-update" element={<SizeUpdate />} />
        <Route path="/code-review-submit" element={<CodeReviewSubmit />} />
        <Route path="/assign-person" element={<AssignPerson />} />
         <Route path="/add-comments" element={<AddComments />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
