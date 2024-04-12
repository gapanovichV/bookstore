import {IAdminSchema} from "entities/AdminBook";
import {IAllBookSchema} from "entities/AllBook";
import {ICartScheme} from "entities/Cart";

export interface StateSchema {
  adminBookPanel: IAdminSchema;
  allBook: IAllBookSchema;
  cartBook: ICartScheme
}
