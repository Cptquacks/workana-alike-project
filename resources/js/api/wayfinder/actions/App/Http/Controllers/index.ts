import UserController from './UserController'
import StoreController from './StoreController'

const Controllers = {
    UserController: Object.assign(UserController, UserController),
    StoreController: Object.assign(StoreController, StoreController),
}

export default Controllers