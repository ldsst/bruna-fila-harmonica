import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import {
  SignUp,
  SignIn,
  NewGuest,
  Guests,
  EditGuest,
  NewHistory,
  History,
  EditHistory,
  NewMusicScore
} from './pages'
import Obras from './pages/obras/obras'
import Partitura from './pages/Partituras'
import PlanoTemporada from './pages/PlanoTemporada'
import Compositor from './pages/Compositores'
import Pessoas from './pages/Pessoas'
import Programa from './pages/Programa'
import NovaPessoa from './pages/NovaPessoa'
import NovaObra from './pages/NovaObra'
import NovoCompositor from './pages/NovoCompositor'
import NovoPlanoTemporada from './pages/NovoPlanoTemporada'
import NovoPrograma from './pages/NovoPrograma'
import EditarCompositor from './pages/EditarCompositor'
import EditarObra from './pages/edit-obra/edit-obra'
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
          <Route exact path='/historico' component={History} />
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
          <Route exact path='/novoDadoHistorico' component={NewHistory} />
          <Route exact path='/novoPlanoTemporada' component={NovoPlanoTemporada} />
          <Route exact path='/novoPrograma' component={NovoPrograma} />
          <Route exact path='/novaPartitura' component={NewMusicScore} />
          <Route exact path='/editarCompositor/:id' component={EditarCompositor} />
          <Route exact path='/editarConvidado/:id' component={EditGuest} />
          <Route exact path='/editarDadoHistorico/:id' component={EditHistory} />
          <Route exact path='/editarObra/:id' component={EditarObra} />
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
