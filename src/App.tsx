import { GlobalStyle } from './styles'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Rotas from './routes'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
