import React from 'react'
import { Text } from '../../components'

export const Footer = () => {
  return (
    <footer className="bg-runner-green font-white p-2 flex items-center">
      <div className="flex items-center justify-between">
        <Text color="white" span variant="body-copy-small">
          © {new Date().getFullYear()} MarchéRunner
        </Text>
        <Text color="white" span variant="body-copy-small">
          by{' '}
          <a
            className="font-white hover:underline"
            href="https://github.com/andrewthamcc"
            rel="noopener noreferrer"
            target="_blank"
          >
            Andrew Tham
          </a>
        </Text>
      </div>
    </footer>
  )
}
