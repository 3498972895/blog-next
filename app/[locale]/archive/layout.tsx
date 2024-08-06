import { ReactNode } from 'react'

export default function ArchiveLayout({
  params: { locale },
  children,
}: {
  params: { locale: string }
  children: ReactNode
}) {
  return <div>{children}</div>
}
