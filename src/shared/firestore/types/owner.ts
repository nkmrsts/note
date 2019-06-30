export type Owner<T> = {
  displayName: string | null
  uid: string
  photoURL: string | null
  customClaims: T | null
}
