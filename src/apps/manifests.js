const getAppManifest = appName => require(`./${appName}/manifest`).default

const manifests = [
  getAppManifest('statistics'),
  getAppManifest('quiz'),
  getAppManifest('quizAdmin'),
  getAppManifest('treasureHuntAdmin')
]

export default manifests
