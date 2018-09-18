const getAppManifest = appName => require(`./${appName}/manifest`).default

const manifests = [
  getAppManifest('treasureHunt'),
  getAppManifest('treasureHuntAdmin'),
  getAppManifest('quiz'),
  getAppManifest('quizAdmin'),
  getAppManifest('qotd'),
  getAppManifest('qotdAdmin'),
  getAppManifest('statistics')
]

export default manifests
