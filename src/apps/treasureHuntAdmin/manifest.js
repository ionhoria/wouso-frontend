import Navigation from './containers/Navigation'
import Routes from './containers/Routes'
import rootReducer from './reducers'

export default {
  title: 'Treasure Hunt Admin',
  baseUrl: 'treasurehuntadmin',
  requiredBackendApps: ['wouso-treasure-hunt'],
  routes: Routes,
  navigation: Navigation,
  reducer: rootReducer
}
