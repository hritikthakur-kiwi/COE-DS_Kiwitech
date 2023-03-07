import connectMongo from '../../../../config/database';
import CaseStudies from '../../../../models/caseStudies';
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
    const { name, image, pdf, description } = req.body;
    const documentToSave = {
      name, image, pdf, description
    }
    if (!name || name === '' || name.trim() === '') {
      return res.status(400).json({ message: 'name is required.' });
    }
    if (!pdf || pdf === '' || pdf.trim() === '') {
      return res.status(400).json({ message: 'pdf is required.' });
    }
    await connectMongo();
    await CaseStudies.create(documentToSave);
    return res.status(200).json({ message: 'CaseStudies added successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message ? error.message : 'Internal Server Error' });
  }
};