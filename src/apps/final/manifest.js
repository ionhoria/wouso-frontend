import Navigation from './containers/Navigation'
import Routes from './containers/Routes'
import rootReducer from './reducers'

export default {
  title: 'Grand Quest',
  baseUrl: 'final',
  requiredBackendApps: ['final'],
  routes: Routes,
  navigation: Navigation,
  reducer: rootReducer
}
