import connectMongo from '../../../../config/database';
import CaseStudies from '../../../../models/caseStudies';
// import { blog } from '../../../../config/blogValidation';
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function getListOfCaseStudiesItems(req, res) {
  try {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
    const { pageNo = 0, limit = 10 } = req.query;
    await connectMongo();
    const totalCountOfDocument = await CaseStudies.count({});
    const itemsToSkip = pageNo*limit;
    const caseStudies = await CaseStudies.find({}).skip(itemsToSkip).limit(limit);
    const totalPages = totalCountOfDocument % limit === 0 ? Math.floor(totalCountOfDocument/limit) : Math.floor(totalCountOfDocument/limit) + 1;
    const data = {
      message: 'List of caseStudies, successfully fetched.',
      caseStudies,
      pageNo,
      limit,
      totalPages 
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message ? error.message : 'Internal Server Error' });
  }
};