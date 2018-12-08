import * as React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Discovery from '../view/discovery/discovery';
import Video from '../view/video/video';
import Mine from '../view/mine/mine';
import Singer from '../view/singer/singer';
import Account from '../view/account/accounts'
import Footer from '../component/footer/footer';

const Routes = () => (
    <div className='App'>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/' exact={true} component={Discovery}/>
                    <Route path='/video' component={Video}/>
                    <Route path='/mine' component={Mine}/>
                    <Route path='/singer' component={Singer}/>
                    <Route path='/account' component={Account}/>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    </div>
)

export default Routes