export interface IAdminSchema {
  totalItems: AdminSchema[]
  status: any
}

export interface AdminSchema {
  name: string
  id: string
  colors: string[]
}
