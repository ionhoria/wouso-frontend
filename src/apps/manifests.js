const getAppManifest = appName => require(`./${appName}/manifest`).default

const manifests = [
  getAppManifest('qotd'),
  getAppManifest('weekly'),
  getAppManifest('final'),
  getAppManifest('challenge')
]

export default manifests
