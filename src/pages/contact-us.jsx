import Head from 'next/head'
import Link from 'next/link'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us - LastFootprint</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Get started for free
            </h2>
          </div>
        </div>
        <form
          action="#"
          className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2"
        >
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
          />
          <TextField
            className="col-span-full"
            label="Phone number"
            id="phone"
            name="phone"
            type="phone"
          />
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="primary"
              className="w-full"
            >
              <span>
                Submit <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
