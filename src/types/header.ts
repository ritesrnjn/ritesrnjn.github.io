export type HeaderMenuItem = {
  title: string
  href: string
  children?: HeaderMenuItem[]
}

export type HeaderProps = {
  headerMenu: HeaderMenuItem[]
}
