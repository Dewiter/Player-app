import { NextApiRequest, NextApiResponse } from 'next';
import YoutubeDl from 'youtube-dl-exec';

export default async function getStream(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const stream = await YoutubeDl(req.body, { dumpSingleJson: true });
  res.status(200).json(stream);
}
