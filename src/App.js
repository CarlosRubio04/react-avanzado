import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <Logo />
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={3} />
  </div>
)
