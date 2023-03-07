import connectMongo from '../../../../config/database';
import Trending from '../../../../models/trending';
// import { blog } from '../../../../config/blogValidation';
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addOneTrendingItem(req, res) {
  try {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
    const { name, url, description } = req.body;
    const documentToSave = {
      name, url, description
    }
    if (!name || name === '' || name.trim() === '') {
      return res.status(400).json({ message: 'name is required.' });
    }
    if (!url || url === '' || url.trim() === '') {
      return res.status(400).json({ message: 'url is required.' });
    }
    await connectMongo();
    await Trending.create(documentToSave);
    return res.status(200).json({ message: 'Trending added successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message ? error.message : 'Internal Server Error' });
  }
};