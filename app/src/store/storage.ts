import AsyncStorage from '@react-native-async-storage/async-storage'

// See https://github.com/ctrlplusb/easy-peasy/issues/599#issuecomment-781258630
// @ts-ignore
window.requestIdleCallback = null

const storage = {
  async getItem(key: string) {
    const item = await AsyncStorage.getItem(key)
    return item === null ? null : JSON.parse(item)
  },
  async setItem(key: string, data: Object) {
    await AsyncStorage.setItem(key, JSON.stringify(data))
  },
  async removeItem(key: string) {
    await AsyncStorage.removeItem(key)
  }
}

export default storage
