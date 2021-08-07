import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pags/home/home';
import Sobre from './pags/sobre/sobre';
import Contato from './pags/contato/contato';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Sobre' component={Sobre}/>
                <Route path='/Contato' component={Contato}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
