// created by zoiew

export default class DolphinNativeBridge {
  name: String
  version: String
  constructor(props: Object) {
    this.name = 'native bridge'
    this.version = 'v0.0.0'
  }
  greet(name: String, message: String) {
    console.log(`${name} say: ${message}`)
  }
}
