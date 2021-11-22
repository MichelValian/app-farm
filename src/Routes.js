import { Route, Switch } from 'react-router-dom';

//pages
import Products from './pages/Products';
import ProductForm from './pages/Products/ProductForm';


const Routes = () => (
    <Switch>
        <Route exact path="/productos" component ={Products}/>
        <Route exact path="/productos/agregar" component ={ProductForm}/>
        <Route exact path="/productos/editar" component ={ProductForm}/>
    </Switch>
)
export default Routes;