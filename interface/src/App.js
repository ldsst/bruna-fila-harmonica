import { Switch, Route, Redirect } from 'react-router-dom'
import {
  SignUp,
  SignIn,
  NewGuest,
  Guests,
  EditGuest,
  NewHistory,
  History,
  EditHistory,
  NewMusicScore,
  MusicScore,
  EditMusicScore,
  Home
} from './pages'
import Obras from './pages/obras/obras'
// import Partitura from './pages/Partituras'
import PlanoTemporada from './pages/seasonPlan/seasonPlan'
import Compositor from './pages/compositores/composers'
import Pessoas from './pages/pessoas/pessoas'
import Programa from './pages/Programa'
import NovaPessoa from './pages/new-pessoas/new-people'
import NovaObra from './pages/NovaObra'
import NovoCompositor from './pages/new-composers/new-composers'
import NovoPlanoTemporada from './pages/new-seasonPlan/new-seasonPlan'
import NovoPrograma from './pages/NovoPrograma'
import EditarCompositor from './pages/edit-composers/edit-Composers'
import EditarObra from './pages/edit-obra/edit-obra'
// import EditarPartitura from './pages/EditarPartitura'
import EditarPessoa from './pages/edit-pessoas/edit-people'
import EditarPlanoTemporada from './pages/edit-seasonPlan/edit-seasonPlan'
import EditarPrograma from './pages/EditarPrograma'

import Main from './components/layout/Main'
import PrivateRoute from './components/private-route/private-route'
import 'antd/dist/antd.css'
import './assets/styles/main.css'
import './assets/styles/responsive.css'

const App = () => {
  return (
    <Switch>
      <Route path='/sign-up' exact component={SignUp} />
      <Route path='/sign-in' exact component={SignIn} />
      <Main>
        <PrivateRoute exact path='/home' component={Home} />
        {/**Guests routes // Rotas dos convidados */}
        <PrivateRoute exact path='/convidados' component={Guests} />
        <PrivateRoute exact path='/novoConvidado' component={NewGuest} />
        <PrivateRoute exact path='/editarConvidado/:id' component={EditGuest} />
        {/**History routes // Rotas dos históricos */}
        <PrivateRoute exact path='/historico' component={History} />
        <PrivateRoute exact path='/novoDadoHistorico' component={NewHistory} />
        <PrivateRoute exact path='/editarDadoHistorico/:id' component={EditHistory} />
        {/**Musical works routes // Rotas das obras musicais */}
        <PrivateRoute exact path='/obras' component={Obras} />
        <PrivateRoute exact path='/novaObra' component={NovaObra} />
        <PrivateRoute exact path='/editarObra/:id' component={EditarObra} />
        {/**Music score routes // Rotas das partituras */}
        <PrivateRoute exact path='/partituras' component={MusicScore} />
        <PrivateRoute exact path='/novaPartitura' component={NewMusicScore} />
        <PrivateRoute exact path='/editarPartitura/:id' component={EditMusicScore} />
        {/**Program routes // Rotas dos programas */}
        <PrivateRoute exact path='/programa' component={Programa} />
        <PrivateRoute exact path='/novoPrograma' component={NovoPrograma} />
        <PrivateRoute exact path='/editarPrograma' component={EditarPrograma} />
        {/**Season plan routes // Rotas dos planos de temporada */}
        <PrivateRoute exact path='/planoTemporada' component={PlanoTemporada} />
        <PrivateRoute exact path='/novoPlanoTemporada' component={NovoPlanoTemporada} />
        <PrivateRoute exact path='/editarPlanoTemporada' component={EditarPlanoTemporada} />
        {/**Composer routes // Rotas dos compositores */}
        <PrivateRoute exact path='/compositores' component={Compositor} />
        <PrivateRoute exact path='/novoCompositor' component={NovoCompositor} />
        <PrivateRoute exact path='/editarCompositor/:id' component={EditarCompositor} />
        {/**People routes // Rotas das pessoas */}
        <PrivateRoute exact path='/pessoas' component={Pessoas} />
        <PrivateRoute exact path='/novaPessoa' component={NovaPessoa} />
        <PrivateRoute exact path='/editarPessoa/' component={EditarPessoa} />
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
      </Main>
    </Switch>
  )
}

export default App
