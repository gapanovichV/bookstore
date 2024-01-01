import type {IAdminSchema , BookSchema} from './model/types/adminBookPanel'
import {adminBookReducer, adminBookActions, fetchBook} from "./model/slice/adminBookSlice";
import {getAllBook} from './model/selectors/getAdminBook'

export {IAdminSchema, BookSchema, adminBookReducer, adminBookActions, getAllBook, fetchBook}

