import React, { useContext, Fragment } from 'react'
import { Context } from '../Context'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return <Fragment>
    <h1>Hola User</h1>
    <button onClick={removeAuth}>Cerrar Sesión</button>
  </Fragment>
}
