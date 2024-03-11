export {type IAdminSchema, type BookSchemaGoogle, adminBookReducer, adminBookActions, getAllBook, fetchBook}

import type {IAdminSchema , BookSchemaGoogle} from './model/types/adminBookPanel'
import {adminBookReducer, adminBookActions, fetchBook} from "./model/slice/adminBookSlice";
import {getAllBook} from './model/selectors/getAdminBook'
