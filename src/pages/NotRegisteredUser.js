import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return <Fragment>
          <RegisterMutation>
            {
              (register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(activateAuth)
                }

                const errorMsg = error && 'Hay un error'
                return <UserForm disabled={loading} error={errorMsg} title='Resgistrarse' onSubmit={onSubmit} />
              }
            }
          </RegisterMutation>

          <UserForm title='Iniciar Seción' onSubmit={activateAuth} />
        </Fragment>
      }
    }
  </Context.Consumer>
)
