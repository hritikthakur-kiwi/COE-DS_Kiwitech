import connectMongo from '../../../../config/database';
import Events from '../../../../models/events';
// import { blog } from '../../../../config/blogValidation';
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function updateOneEvent(req, res) {
  try {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  const { _id, name, image, registrationUrl, location, startDateEvent, endDateEvent, liveLink, youTubeVideoLink } = req.body;
  const documentToSave = {
    name, image, registrationUrl, location, startDateEvent, endDateEvent, liveLink, youTubeVideoLink
  }
  if (!_id || _id === '' || _id.trim() === '') {
    return res.status(400).json({ message: 'id is required.' });
  }
  if (!name || name === '' || name.trim() === '') {
    return res.status(400).json({ message: 'name is required.' });
  }
  if (!image || image === '' || image.trim() === '') {
    return res.status(400).json({ message: 'image is required.' });
  }
    await connectMongo();
    await Events.findByIdAndUpdate(_id, documentToSave);
    return res.status(200).json({ message: 'Events updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message ? error.message : 'Internal Server Error' });
  }
};