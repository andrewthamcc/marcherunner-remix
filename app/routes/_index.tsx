import type { ActionArgs, LoaderArgs, V2_MetaFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Button, Text } from '../components'
import { auth } from '~/auth/auth.server'
import { Layout } from '~/layout'
import { Form } from '@remix-run/react'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'MarcheRunner' }]
}

export const loader = async ({ request }: LoaderArgs) => {
  const authData = await auth.isAuthenticated(request)
  if (authData) redirect('/dashboard')
  return null
}
export const action = async ({ request }: ActionArgs) => {
  return auth.authenticate('auth0', request)
}

export default function Index() {
  return (
    <Layout>
      <section className="hero">
        <div className="container py-10">
          <h1 className="text-6xl italic text-white my-6">MarchéRunner</h1>
          <Text className="leading-8" color="white" variant="body-copy">
            MarchéRunner is a web application for helping with your grocery
            runs.
          </Text>

          <Text className="leading-8" color="white" variant="body-copy-small">
            Already have an account?{' '}
            <Form className="inline" action="/auth/auth0" method="post">
              <button
                className="text-sm font-semibold text-runnerOrange hover:underline hover:cursor-pointer italic"
                type="submit"
              >
                Sign in
              </button>
            </Form>
          </Text>
        </div>
      </section>

      <section className="container flex py-10">
        <div>
          <h3 className="font-bold italic text-4xl mb-10">How it works...</h3>
          <Text className="leading-8" variant="body-copy">
            A super simple web application for all your grocery shopping needs.
            Write your list, head off on your shopping trip, and start over
            again.
          </Text>
        </div>
        <div className="about-screenshot">
          <img
            className="shadow-xl"
            alt="MarchéRunner app screenshot"
            src="/assets/marcherunner-list.png"
          />
        </div>
      </section>

      <section className="container py-10">
        <h3 className="font-bold italic text-4xl">Get running....</h3>

        <div className="flex items-center justify-center gap-4 py-10">
          <div className="flex flex-col gap-2 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="fill-white bg-runnerGreen rounded-lg w-1/2 h-1/2"
            >
              <path d="M 8 6 A 3 3 0 0 0 5 9 A 3 3 0 0 0 8 12 A 3 3 0 0 0 11 9 A 3 3 0 0 0 8 6 z M 12.59375 7 C 12.85375 7.61 13 8.284 13 9 L 22 9 L 22 7 L 12.59375 7 z M 12.589844 11 C 12.345844 11.569 12.005078 12.084578 11.580078 12.517578 C 12.021078 12.652578 12.425453 12.819 12.814453 13 L 22 13 L 22 11 L 12.589844 11 z M 8 14 C 4.722 14 2 15.429 2 17 L 2 18 L 14 18 L 14 17 C 14 15.429 11.278 14 8 14 z M 15.345703 15 C 15.762703 15.61 16 16.284 16 17 L 22 17 L 22 15 L 15.345703 15 z" />
            </svg>

            <Text align="center">1. Login with a social media partner.</Text>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="fill-white bg-runnerGreen rounded-lg w-1/2 h-1/2"
            >
              <path d="M 5.5859375 3 L 3.5859375 5 L 2 5 L 2 7 L 4.4140625 7 L 7 4.4140625 L 5.5859375 3 z M 9 5 L 9 7 L 22 7 L 22 5 L 9 5 z M 5.5859375 9 L 3.5859375 11 L 2 11 L 2 13 L 4.4140625 13 L 7 10.414062 L 5.5859375 9 z M 9 11 L 9 13 L 22 13 L 22 11 L 9 11 z M 4 16.5 A 1.5 1.5 0 0 0 2.5 18 A 1.5 1.5 0 0 0 4 19.5 A 1.5 1.5 0 0 0 5.5 18 A 1.5 1.5 0 0 0 4 16.5 z M 9 17 L 9 19 L 22 19 L 22 17 L 9 17 z" />
            </svg>
            <Text align="center">2. Make your shopping list.</Text>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="fill-white bg-runnerGreen rounded-lg w-1/2 h-1/2"
            >
              <path d="M 4.4160156 1.9960938 L 1.0039062 2.0136719 L 1.0136719 4.0136719 L 3.0839844 4.0039062 L 6.3789062 11.908203 L 5.1816406 13.822266 C 4.3432852 15.161017 5.3626785 17 6.9414062 17 L 19 17 L 19 15 L 6.9414062 15 C 6.8301342 15 6.8173041 14.978071 6.8769531 14.882812 L 8.0527344 13 L 15.521484 13 C 16.247484 13 16.917531 12.605703 17.269531 11.970703 L 20.871094 5.484375 C 21.242094 4.818375 20.760047 4 19.998047 4 L 5.25 4 L 4.4160156 1.9960938 z M 7 18 A 2 2 0 0 0 5 20 A 2 2 0 0 0 7 22 A 2 2 0 0 0 9 20 A 2 2 0 0 0 7 18 z M 17 18 A 2 2 0 0 0 15 20 A 2 2 0 0 0 17 22 A 2 2 0 0 0 19 20 A 2 2 0 0 0 17 18 z" />
            </svg>
            <Text align="center">3. Go shopping with MarchéRunner!</Text>
          </div>
        </div>
      </section>
    </Layout>
  )
}
