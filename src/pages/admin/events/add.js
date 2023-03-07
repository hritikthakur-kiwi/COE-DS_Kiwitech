import { useState } from 'react';
import axios from 'axios';

export default function AddBlogPage() {
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
        name,
        image,
        registrationUrl,
        youTubeVideoLink
      });
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/api/events/add",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      const response =  await axios(config);
      alert(response.data.message);
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <h1>Add a Events</h1>
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