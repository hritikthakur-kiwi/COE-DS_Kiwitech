import connectMongo from '../../../../config/database';
import Blogs from '../../../../models/blogs';
// import { blog } from '../../../../config/blogValidation';
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function getOneBlog(req, res) {
  try {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
    const { id } = req.query;
    await connectMongo();
    const blog = await Blogs.findById(id);
    if (!blog) {
      return res.status(404).json({ message: 'Blogs not found' });
    }
    const data = {
      message: 'List of blogs, successfully fetched.',
      blog
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message ? error.message : 'Internal Server Error' });
  }
};