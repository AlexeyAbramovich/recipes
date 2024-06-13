import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import { HomePage } from './pages/home-page/HomePage'
import { FavoritesPage } from './pages/favorites-page/FavoritesPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
