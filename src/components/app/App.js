import { lazy, Suspense } from 'react';
import {BrowserRouter as HashRouter, Route, Routes} from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/singleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/singleCharacterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));


const App = () => {

    return (
        <HashRouter>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/MIP"       element={<MainPage/>} />
                            <Route path="/MIP/comics" element={<ComicsPage/>}/>
                            <Route path="/MIP/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic'/>}/>  
                            <Route path="/MIP/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>} />
                            <Route path="*"       element={<Page404/>} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </HashRouter>
        )
}

export default App;