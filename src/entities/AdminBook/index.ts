import type {IAdminSchema , AdminSchema} from './model/types/adminBookPanel'
import {adminBookReducer, adminBookActions, fetchBook} from "./model/slice/adminBookSlice";
import {getAllBook} from './model/selectors/getAdminBook'

export {IAdminSchema, AdminSchema, adminBookReducer, adminBookActions, getAllBook, fetchBook}

