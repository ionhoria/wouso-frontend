import Navigation from './containers/Navigation'
import Routes from './containers/Routes'
import rootReducer from './reducers'

export default {
  title: 'Quiz Admin',
  baseUrl: 'quizadmin',
  requiredBackendApps: ['wouso-test-app'],
  routes: Routes,
  navigation: Navigation,
  reducer: rootReducer
}
