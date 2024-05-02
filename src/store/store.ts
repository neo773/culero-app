import AsyncStorage from "@react-native-async-storage/async-storage"
import { init, RematchDispatch, RematchRootState } from "@rematch/core"
import { createModel } from "@rematch/core"
import { Models } from "@rematch/core"
import createRematchPersist from "@rematch/persist"

type authType = "EMAIL" | "APPLE" | "GOOGLE"

interface User {
  isLoggedIn: boolean
  authType: authType
  authToken: string | null
  email: string | null
}


const userState = createModel<RootModel>()({
  state: {
    isLoggedIn: false,
    email: null,
    authType: "EMAIL",
    authToken: null,
  } as User,
  reducers: {
    setUser(state, payload: User) {
      return { ...state, ...payload }
    },
  },
  effects: (dispatch) => ({
    login(User: User) {
      dispatch.userState.setUser(User)
    },
    logout() {
      dispatch.userState.setUser({
        isLoggedIn: false,
        authType: "EMAIL",
        authToken: null,
        email: null
      })
    },
  }),
})

interface RootModel extends Models<RootModel> {
  userState: typeof userState
}

const models: RootModel = { userState }

const persistPlugin = createRematchPersist<
  RematchRootState<RootModel>,
  RootModel
>({
  storage: AsyncStorage,
  key: "root",
})

export const store = init({
  models,
  plugins: [persistPlugin],
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
