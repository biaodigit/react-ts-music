import * as React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Discovery from '../views/discovery/discovery';
import Video from '../views/video/video';
import Mine from '../views/mine/mine';
import Singer from '../views/singer/singer';
import Account from '../views/account/account'
import AllSongList from '../views/all-song-list/all-song-list'
import Rank from '../views/rank/rank'
import SongList from '../views/song-list/song-list'
import Search from '../views/search/search'
import Footer from '../components/footer/footer';
import Player from '../components/player/player'

const Routes = () => (
    <div className='App'>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/discovery' exact={true} component={Discovery}/>
                    <Route path='/video' component={Video}/>
                    <Route path='/mine' component={Mine}/>
                    <Route path='/singer' component={Singer}/>
                    <Route path='/account' component={Account}/>
                    <Route path='/allSongList' component={AllSongList}/>
                    <Route path='/rank' component={Rank}/>
                    <Route path='/songList/:id' component={SongList}/>
                    <Redirect to='/discovery'/>
                </Switch>
                <Player/>
                <Search/>
                <Footer/>
            </div>
        </BrowserRouter>
    </div>
)

export default Routes