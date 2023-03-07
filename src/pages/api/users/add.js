import connectMongo from '../../../../config/database';
import Users from '../../../../models/users';
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addOneBlog(req, res) {
  try {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }
  
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');
    console.log('CREATING DOCUMENT');
    // const test = await Users.create(req.body);
    console.log('CREATED DOCUMENT');
    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}