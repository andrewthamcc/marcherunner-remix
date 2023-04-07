import React from 'react'
import { Link } from '@remix-run/react'
import { Button } from '../../components'
import Runner from './assets/runner.svg'
import './style.scss'

export const Header: React.FC = () => {
  return (
    <header className="bg-runner-green font-white">
      <div className="flex items-center justify-between">
        <Link to="/">
          <div className="flex flex-row justify-between">
            <h2 className="font-medium mr-2 italic">MarchéRunner</h2>
            <div className="w-10 h-10">
              <Runner />
            </div>
          </div>
        </Link>

        {/* <Button
          border={false}
          color="orange"
          label={isAuthenticated ? 'Logout' : 'Sign In'}
          onClick={isAuthenticated ? () => logout() : loginWithRedirect}
        /> */}
      </div>
    </header>
  )
}
