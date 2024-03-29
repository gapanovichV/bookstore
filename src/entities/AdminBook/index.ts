import type {IAdminSchema , BookSchemaGoogle} from './model/types/adminBookPanel'
import {adminBookReducer, adminBookActions, fetchBook} from "./model/slice/adminBookSlice";
import {getAdminBook} from './model/selectors/getAdminBook'

export {type IAdminSchema, type BookSchemaGoogle, adminBookReducer, adminBookActions, getAdminBook, fetchBook}

