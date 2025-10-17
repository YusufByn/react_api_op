import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Facts from './components/pages/Facts'
import FactById from './components/pages/FactById'
import CreateFact from './components/pages/CreateFact'
import UpdateFact from './components/pages/UpdateFact'
import DeleteFact from './components/pages/DeleteFact'

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
