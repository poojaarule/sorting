import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './SortingN/LoginForm'
import Products from './SortingN/a/Products'
import Cart from './SortingN/a/Cart'
import NotFound from './SortingN/a/NotFound'
import ProtectedRoute from './SortingN/a/ProtectedRoute'
import Home from './SortingN/a/Home'








const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/products" component={Products} />
      <ProtectedRoute exact path="/cart" component={Cart} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
