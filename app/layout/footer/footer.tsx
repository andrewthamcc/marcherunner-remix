import { Text } from '../../ui'

export const Footer = () => {
  return (
    <footer className="bg-runnerGreen font-white p-2 flex items-center">
      <div className="flex items-center justify-between container">
        <Text color="white" span variant="body-copy-xsmall">
          © {new Date().getFullYear()} MarchéRunner
        </Text>
        <Text color="white" span variant="body-copy-xsmall">
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
