import connectMongo from '../../../../config/database';
import Events from '../../../../models/events';
// import { blog } from '../../../../config/blogValidation';
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addOneEvent(req, res) {
  try {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
    const { name, image, registrationUrl, location, startDateEvent, endDateEvent, liveLink, youTubeVideoLink } = req.body;
    const documentToSave = {
      name, image, registrationUrl, location, startDateEvent, endDateEvent, liveLink, youTubeVideoLink
    }
    if (!name || name === '' || name.trim() === '') {
      return res.status(400).json({ message: 'name is required.' });
    }
    if (!image || image === '' || image.trim() === '') {
      return res.status(400).json({ message: 'image is required.' });
    }
    await connectMongo();
    await Events.create(documentToSave);
    return res.status(200).json({ message: 'Event added successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message ? error.message : 'Internal Server Error' });
  }
};