import { NextApiResponse, NextApiRequest } from 'next';

import { search } from 'ytubes';

export default async function handleSuggestions(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(
    await search(req.body, {
      type: 'video',
      max: 5,
    })
  );
}
