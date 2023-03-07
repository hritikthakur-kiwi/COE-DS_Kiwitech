import connectMongo from '../../../../config/database';
import Trending from '../../../../models/trending';
// import { blog } from '../../../../config/blogValidation';
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function getOneTrending(req, res) {
  try {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
    const { id } = req.query;
    await connectMongo();
    const trending = await Trending.findById(id);
    if (!trending) {
      return res.status(404).json({ message: 'Trending not found' });
    }
    const data = {
      message: 'List of trending, successfully fetched.',
      trending
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message ? error.message : 'Internal Server Error' });
  }
};