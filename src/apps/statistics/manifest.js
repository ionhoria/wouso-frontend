import Navigation from './containers/Navigation'
import Routes from './containers/Routes'
import rootReducer from './reducers'

export default {
  title: 'Statistics',
  baseUrl: 'statistics',
  requiredBackendApps: ['wouso-statistics'],
  routes: Routes,
  navigation: Navigation,
  reducer: rootReducer
}
