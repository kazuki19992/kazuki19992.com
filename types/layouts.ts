import { ReactNode } from "react"

export type LayoutProps = {
  children: ReactNode;
}
export type DefaultLayoutProps = LayoutProps

export type DashboardCardLayoutProps = LayoutProps & {
  title: string;
  className?: string;
}

export type ContentGroupProps = {
  groupTitle: string;
  children: ReactNode;
}