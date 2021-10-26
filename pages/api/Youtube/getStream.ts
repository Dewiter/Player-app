import { NextApiRequest, NextApiResponse } from 'next';
import YoutubeDl from 'youtube-dl-exec';

export type stream = {
  stream: string;
};

export default async function getStream(
  req: NextApiRequest,
  res: NextApiResponse<stream>
) {
  const stream = await YoutubeDl(req.body, { dumpSingleJson: true });
  res.status(200).json({ stream: stream.formats[0].url });
}
