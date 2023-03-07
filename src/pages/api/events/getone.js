import connectMongo from '../../../../config/database';
import Events from '../../../../models/events';
// import { blog } from '../../../../config/blogValidation';
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function getOneEvent(req, res) {
  try {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
    const { id } = req.query;
    await connectMongo();
    const event = await Events.findById(id);
    if (!event) {
      return res.status(404).json({ message: 'Events not found' });
    }
    const data = {
      message: 'List of events, successfully fetched.',
      event
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message ? error.message : 'Internal Server Error' });
  }
};