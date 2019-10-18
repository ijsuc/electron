require('./support/globals')
const fs = require('fs')
const ps = require('ps-node')

const appPath = () => {
  switch (process.platform) {
    case 'darwin':
      return path.join(
        __dirname,
        '..',
        '.tmp',
        'mac',
        'Swifty.app',
        'Contents',
        'MacOS',
        'Swifty'
      )
    case 'linux':
      return path.join(__dirname, '..', '.tmp', 'linux-unpacked', 'swifty')
    default:
      throw 'Unsupported platform'
  }
}

const fixturePath = file => {
  return path.join(process.cwd(), 'test', 'fixtures', file)
}

const storageFile = () => {
  return path.join(process.cwd(), 'test', '.storage', 'default.swftx')
}

const prepareStorage = storage => {
  try {
    let data = ''
    if (storage !== 'pristine') {
      data = fs.readFileSync(fixturePath(`${storage}.txt`)).toString('utf-8')
    }
    fs.writeFileSync(storageFile(), data, { flag: 'w' })
  } catch (error) {
    console.log(error)
  }
}

const beforeHelper = options => {
  if (options && options.storage) prepareStorage(options.storage)
  global.app = new Application({
    path: appPath(),
    env: {
      SPECTRON_STORAGE_PATH: storageFile(),
      RUNNING_IN_SPECTRON: 1,
      APP_ENV: 'test'
    }
  })
  return app.start()
}

const afterHelper = () => {
  ps.lookup({ command: /MacOS\/Swifty$/ }, (err, items) => {
    items.forEach(item => {
      ps.kill(item.pid, err => {
        if (err) throw new Error(err)
      })
    })
  })
  if (app && app.isRunning()) {
    return app.stop()
  }
}

module.exports = { beforeHelper, afterHelper }
