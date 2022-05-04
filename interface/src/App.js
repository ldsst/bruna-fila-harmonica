/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import { SignUp, SignIn, NewGuest, Guests } from './pages'
import Historico from './pages/Historico'
import Obras from './pages/Obras'
import Partitura from './pages/Partituras'
import PlanoTemporada from './pages/PlanoTemporada'
import Compositor from './pages/Compositores'
import Pessoas from './pages/Pessoas'
import Programa from './pages/Programa'
import NovaPessoa from './pages/NovaPessoa'
import NovaObra from './pages/NovaObra'
import NovaPartitura from './pages/NovaPartitura'
import NovoCompositor from './pages/NovoCompositor'
import NovoDadoHistorico from './pages/NovoDadoHistorico'
import NovoPlanoTemporada from './pages/NovoPlanoTemporada'
import NovoPrograma from './pages/NovoPrograma'
import EditarCompositor from './pages/EditarCompositor'
import EditarConvidado from './pages/EditarConvidado'
import EditarDadoHistorico from './pages/EditarDadoHistorico'
import EditarObra from './pages/EditarObra'
import EditarPartitura from './pages/EditarPartitura'
import EditarPessoa from './pages/EditarPessoa'
import EditarPlanoTemporada from './pages/EditarPlanoTemporada'
import EditarPrograma from './pages/EditarPrograma'

import Main from './components/layout/Main'
import PrivateRoute from './components/private-route/private-route'
import 'antd/dist/antd.css'
import './assets/styles/main.css'
import './assets/styles/responsive.css'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/sign-in' exact component={SignIn} />
        <Main>
          <PrivateRoute exact path='/home' component={Home} />
          <Route exact path='/convidados' component={Guests} />
          <Route exact path='/historico' component={Historico} />
          <Route exact path='/obras' component={Obras} />
          <Route exact path='/partituras' component={Partitura} />
          <Route exact path='/programa' component={Programa} />
          <Route exact path='/planoTemporada' component={PlanoTemporada} />
          <Route exact path='/compositores' component={Compositor} />
          <Route exact path='/pessoas' component={Pessoas} />
          <Route exact path='/novaPessoa' component={NovaPessoa} />
          <Route exact path='/novaObra' component={NovaObra} />
          <Route exact path='/novoCompositor' component={NovoCompositor} />
          <Route exact path='/novoConvidado' component={NewGuest} />
          <Route exact path='/novoDadoHistorico' component={NovoDadoHistorico} />
          <Route exact path='/novoPlanoTemporada' component={NovoPlanoTemporada} />
          <Route exact path='/novoPrograma' component={NovoPrograma} />
          <Route exact path='/novaPartitura' component={NovaPartitura} />
          <Route exact path='/editarCompositor/:id' component={EditarCompositor} />
          <Route exact path='/editarConvidado' component={EditarConvidado} />
          <Route exact path='/editarDadoHistorico' component={EditarDadoHistorico} />
          <Route exact path='/editarObra' component={EditarObra} />
          <Route exact path='/editarPartitura' component={EditarPartitura} />
          <Route exact path='/editarPessoa/' component={EditarPessoa} />
          <Route exact path='/editarPlanoTemporada' component={EditarPlanoTemporada} />
          <Route exact path='/editarPrograma' component={EditarPrograma} />
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
        </Main>
      </Switch>
    </div>
  )
}

export default App
