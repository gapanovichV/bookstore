export interface IAdminSchema {
  totalItems: AdminSchema[]
}

export interface AdminSchema {
  name: string
  id: string
  colors: string[]
}
