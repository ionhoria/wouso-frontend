import Navigation from './containers/Navigation'
import Routes from './containers/Routes'
import rootReducer from './reducers'

export default {
  title: 'Treasure Hunt',
  baseUrl: 'treasurehunt',
  requiredBackendApps: ['wouso-treasure-hunt'],
  routes: Routes,
  navigation: Navigation,
  reducer: rootReducer
}
