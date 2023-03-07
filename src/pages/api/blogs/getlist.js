import connectMongo from '../../../../config/database';
import Blogs from '../../../../models/blogs';
// import { blog } from '../../../../config/blogValidation';
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function getListOfBlogs(req, res) {
  try {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  const { pageNo = 0, limit = 100 } = req.query;
    await connectMongo();
    const totalCountOfDocument = await Blogs.count({});
    const itemsToSkip = pageNo*limit;
    const blogs = await Blogs.find({}).skip(itemsToSkip).limit(limit);
    const totalPages = totalCountOfDocument % limit === 0 ? Math.floor(totalCountOfDocument/limit) : Math.floor(totalCountOfDocument/limit) + 1;
    const data = {
      message: 'List of blogs, successfully fetched.',
      blogs,
      pageNo,
      limit,
      totalPages 
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message ? error.message : 'Internal Server Error' });
  }
};