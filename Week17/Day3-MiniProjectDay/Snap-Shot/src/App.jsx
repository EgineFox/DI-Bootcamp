import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SearchPage from "./pages/SearchPage";


export default function App() {
 
  return (
    <div>
    
        <Routes>
          <Route path='/' element={<MainLayout />}>
          <Route index element={<SearchPage defaultQuery="mountains" />}/> 
           <Route path="search/:query" element={<SearchPage />} />
          </Route>
          <Route path='/beaches' element={<MainLayout />}>
          <Route index element={<SearchPage defaultQuery="beaches" />} />
          </Route>
          <Route path='/birds' element={<MainLayout />}>
          <Route index element={<SearchPage defaultQuery="birds" />} />
          </Route>
          <Route path='/food' element={<MainLayout />}>
           <Route index element={<SearchPage defaultQuery="food" />} />
           </Route>
        </Routes>
    
    </div>
  );
}