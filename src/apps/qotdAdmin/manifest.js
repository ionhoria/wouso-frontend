import Navigation from './containers/Navigation'
import Routes from './containers/Routes'
import rootReducer from './reducers'

export default {
  title: 'Question of the Day Admin',
  baseUrl: 'qotdadmin',
  requiredBackendApps: ['wouso-qotd'],
  routes: Routes,
  navigation: Navigation,
  reducer: rootReducer
}
