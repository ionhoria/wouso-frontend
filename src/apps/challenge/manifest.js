import Navigation from './containers/Navigation'
import Routes from './containers/Routes'
import rootReducer from './reducers'

export default {
  title: 'Challenge',
  baseUrl: 'challenge',
  requiredBackendApps: ['challenge'],
  routes: Routes,
  navigation: Navigation,
  reducer: rootReducer
}
