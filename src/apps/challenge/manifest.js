import Routes from './containers/Routes'
import Navigation from './containers/Navigation'
import rootReducer from './reducers'

export default {
  title: 'Challenge',
  baseUrl: 'challenge',
  requiredBackendApps: ['wouso-challenge'],
  routes: Routes,
  navigation: Navigation,
  reducer: rootReducer
}
