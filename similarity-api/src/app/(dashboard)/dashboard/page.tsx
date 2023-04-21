import RequestApiKey from '@/components/RequestApiKey'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Similarity API | Dashboard',
  description: 'Free & open-source text similarity API',
}

const page = async () => {
  const user = await getServerSession(authOptions)
  

  return (
    <div className='max-w-7xl mx-auto mt-16'>
        <RequestApiKey />
    </div>
  )
}

export default page