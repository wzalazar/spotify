import NavigationBar from '../NavigationBar/NavigationBar'
import { Line } from '../Line/Line'

export const Layout = ({ children, className }) => (
  <div className={'Layout ' + className}>
    <div className={'Layout__cover ' + className} />
    <NavigationBar />
    {children}
    <Line />
  </div>
)
