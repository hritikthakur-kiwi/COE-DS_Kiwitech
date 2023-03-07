import connectMongo from '../../../../config/database';
import Blogs from '../../../../models/blogs';
// import { blog } from '../../../../config/blogValidation';
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addOneBlog(req, res) {
  try {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
    const { title, image, content, metaTitle, metaDescription } = req.body;
    const documentToSave = {
      title, image, content, metaTitle, metaDescription
    }
    if (!title || title === '' || title.trim() === '') {
      return res.status(400).json({ message: 'Title is required.' });
    }
    if (!content || content === '' || content.trim() === '') {
      return res.status(400).json({ message: 'Content is required.' });
    }
    await connectMongo();
    await Blogs.create(documentToSave);
    return res.status(200).json({ message: 'Blog added successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message ? error.message : 'Internal Server Error' });
  }
};