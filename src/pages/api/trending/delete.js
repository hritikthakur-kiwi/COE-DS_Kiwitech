import connectMongo from '../../../../config/database';
import Trending from '../../../../models/trending';
// import { blog } from '../../../../config/blogValidation';
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function deleteOneTrendingItem(req, res) {
  try {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
    const { id } = req.body;
    if (!id || id === '' || id.trim() === '') {
      return res.status(400).json({ message: 'Id is required.' });
    }
    await connectMongo();
    await Trending.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Trending deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message ? error.message : 'Internal Server Error' });
  }
};