import { withMethods } from '@/lib/api-middlewares/with-methods'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { CreateApiData } from '@/types/api'
import { nanoid } from 'nanoid'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { z } from 'zod'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<CreateApiData>
) => {
  try {
    const createdApiKey = { key: nanoid(32) }

    return res.status(200).json({ error: null, createdApiKey })
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Internal Server Error', createdApiKey: null })
  }
}

export default handler