import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Facts from './components/api/Facts'
import FactById from './components/api/FactById'
import CreateFact from './components/api/CreateFact'
import UpdateFact from './components/api/UpdateFact'
import DeleteFact from './components/api/DeleteFact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Facts />} />
        <Route path="/search" element={<FactById />} />
        <Route path="/create" element={<CreateFact />} />
        <Route path="/update" element={<UpdateFact />} />
        <Route path="/delete" element={<DeleteFact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
