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
              (register) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(activateAuth)
                }
                return <UserForm title='Resgistrarse' onSubmit={onSubmit} />
              }
            }
          </RegisterMutation>

          <UserForm title='Iniciar Seción' onSubmit={activateAuth} />
        </Fragment>
      }
    }
  </Context.Consumer>
)
