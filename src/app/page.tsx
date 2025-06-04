import { buttonVariants } from '@/components/ui/button'
import Wrapper from '@/components/Wrapper'
import { ArrowRight, Upload, MessageCircle, UserPlus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <>
      <Wrapper className='mb-12 mt-16 sm:mt-24 flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            DocuQ is now Public!
          </p>
        </div>

        <h1 className='max-w-4xl text-4xl font-bold md:text-6xl lg:text-7xl'>
            Chat with your <span className='text-violet-600'>Documents </span>
            in seconds
        </h1>

        <p className='mt-5 max-w-prose text-zinc-700 sm:text-xl '>
          DocuQ allow you to have conversations with any pdf document. Simply upload your file and start asking questions right away.
        </p>
        
        <Link className={buttonVariants({
          className:'mt-5',
        })} href={'/dashboard'}>
          Get Started <ArrowRight className='ml-2 h-5 w-5'/>
        </Link>
      </Wrapper>

      <div>
        <div className='relative isolate'>
          <div aria-hidden="true" className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }} className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]' />
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 md:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image alt='product-preview' src='/dashboard-preview.jpg' width={1364} height={866} quality={100} className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'/>
                </div>
              </div>
            </div>
          </div>

          <div aria-hidden="true" className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }} className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]' />
          </div>
        </div>
      </div>

      <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>Start chatting in minutes</h2>
            <p className='mt-4 text-lg text-gray-600'>
              Chatting to your pdf files has never been easier than with DocuQ
            </p>
          </div>
        </div>

        <ol className="my-8 grid gap-8 pt-8 md:grid-cols-3">
      {/* Step 1 */}
          <li className="group rounded-2xl border border-zinc-200 p-6 shadow-sm transition hover:border-violet-600 hover:shadow-md">
            <div className="flex flex-col items-start space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                <UserPlus size={24}/>
              </div>
              <div className="space-y-1">
                <span className="text-sm font-medium text-violet-600">Step 1</span>
                <h3 className="text-xl font-semibold text-zinc-900">Sign up for an account</h3>
                <p className="text-sm text-zinc-600">
                  Either start with a free plan or choose our{' '}
                  <Link href="/pricing" className="text-violet-800 underline underline-offset-2 hover:text-violet-600">
                    pro plan
                  </Link>.
                </p>
              </div>
            </div>
          </li>

          {/* Step 2 */}
          <li className="group rounded-2xl border border-zinc-200 p-6 shadow-sm transition hover:border-violet-600 hover:shadow-md">
            <div className="flex flex-col items-start space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                <Upload size={24} />
              </div>
              <div className="space-y-1">
                <span className="text-sm font-medium text-violet-600">Step 2</span>
                <h3 className="text-xl font-semibold text-zinc-900">Upload your PDF file</h3>
                <p className="text-sm text-zinc-600">
                  We&apos;ll process your file and make it ready for you to chat with.
                </p>
              </div>
            </div>
          </li>

          {/* Step 3 */}
          <li className="group rounded-2xl border border-zinc-200 p-6 shadow-sm transition hover:border-violet-600 hover:shadow-md">
            <div className="flex flex-col items-start space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                <MessageCircle size={24} />
              </div>
              <div className="space-y-1">
                <span className="text-sm font-medium text-violet-600">Step 3</span>
                <h3 className="text-xl font-semibold text-zinc-900">Start asking questions</h3>
                <p className="text-sm text-zinc-600">
                  It&apos;s that simple. Try out DocuQ today — it really takes less than a minute.
                </p>
              </div>
            </div>
          </li>
        </ol>

        <div className='mx-auto max-w-6xl px-6 md:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image alt='uploading-preview' src='/file-upload-preview.jpg' width={1419} height={732} quality={100} className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
