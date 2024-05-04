import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Index'
import { Login, Register } from './components/Auth'
import Dashboard from './components/Dashboard/Index';
import Create from './components/Email/Create';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-new" element={<Create />} />
      </Routes>
    </Router>
  )
}

export default App
