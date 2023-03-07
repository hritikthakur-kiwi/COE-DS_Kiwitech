import connectMongo from '../../../../config/database';
import CaseStudies from '../../../../models/caseStudies';
// import { blog } from '../../../../config/blogValidation';
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function getOneCaseStudies(req, res) {
  try {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
    const { id } = req.query;
    await connectMongo();
    const caseStudies = await CaseStudies.findById(id);
    if (!caseStudies) {
      return res.status(404).json({ message: 'CaseStudies not found' });
    }
    const data = {
      message: 'List of CaseStudies, successfully fetched.',
      caseStudies
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message ? error.message : 'Internal Server Error' });
  }
};