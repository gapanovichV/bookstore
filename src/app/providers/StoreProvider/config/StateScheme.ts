import {IAdminSchema} from "entities/AdminBook";
import {IAllBookSchema} from "entities/AllBook";

export interface StateSchema {
  adminBookPanel: IAdminSchema;
  allBook: IAllBookSchema;
}
