import { useEffect ,useState } from 'react';
import axios from 'axios';
import { getEventsByID } from '../../../../apiHelper';
import { useRouter } from 'next/router';

export default function EditBlogPage() {
const router = useRouter();
const [editId, setEditId] = useState('')
const [name, setName] = useState('')
const [image, setImage] = useState('')
const [registrationUrl, setRegistrationUrl] = useState('')
const [youTubeVideoLink, setYouTubeVideoLink] = useState('')
const [submitting, setSubmitting] = useState(false);

const handleNameChange = (event) => setName(event.target.value)
const handleImageChange = (event) => setImage(event.target.value)
const handleRegistrationUrlChange = (event) => setRegistrationUrl(event.target.value)
const handleYouTubeVideoLinkChange = (event) => setYouTubeVideoLink(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    try {
      const data = JSON.stringify({
        _id:editId,
        name,
        image,
        registrationUrl,
        youTubeVideoLink
      });
      const config = {
        method: "put",
        maxBodyLength: Infinity,
        url: "/api/events/update",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      const response =  await axios(config);
      alert(response.data.message);
      router.back();
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }
  useEffect( () => {
    (async () => {
      try {
      const id = (router.asPath.split("/admin/events/edit/"))[1];
      const eventOne = await getEventsByID(id);
      setEditId(eventOne._id);
      setName(eventOne.name);
      setImage(eventOne.image);
      setRegistrationUrl(eventOne.registrationUrl);
      setYouTubeVideoLink(eventOne.youTubeVideoLink);
      } catch (err) {
        router.back();
      }
    })()
  }, [])

  return (
    <>
      <h1>Edit the events</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name :</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" value={image} onChange={handleImageChange} />
        </div>
        <div>
          <label htmlFor="registrationUrl">registrationUrl URL:</label>
          <input type="text" id="registrationUrl" value={registrationUrl} onChange={handleRegistrationUrlChange} />
        </div>
        <div>
          <label htmlFor="youTubeVideoLink">You Tube Video Link:</label>
          <textarea id="youTubeVideoLink" value={youTubeVideoLink} onChange={handleYouTubeVideoLinkChange} />
        </div>
        <button type="submit" disabled={submitting}>Submit</button>
      </form>
    </>
  )
}