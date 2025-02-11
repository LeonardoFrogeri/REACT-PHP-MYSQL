import{ BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Contato from './Contato';
import Header from './components/Header';
import Erro from './Erro';
import Produto from './Produto';
function RouterApp() {
    return  (    
    <BrowserRouter>
    <Header/>  
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Sobre' element={<Sobre/>}></Route>
            <Route path='/Contato' element={<Contato/>}></Route>
            <Route path='/Produto/:id' element={<Produto/>}></Route>
            <Route path='*' element={<Erro />}></Route> 
        </Routes>
    </BrowserRouter>
    );

}
 
export default RouterApp;