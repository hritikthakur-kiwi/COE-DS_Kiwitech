import { useState } from 'react';
import axios from 'axios';

export default function AddBlogPage() {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [submitting, setSubmitting] = useState(false);

  const handleNameChange = (event) => setName(event.target.value)
  const handleUrlChange = (event) => setUrl(event.target.value)
  const handleDescriptionChange = (event) => setDescription(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    try {
      const data = JSON.stringify({
        name,
        url,
        description
      });
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/api/trending/add",
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
      <h1>Add a Trending Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name :</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label htmlFor="url">url URL:</label>
          <input type="text" id="url" value={url} onChange={handleUrlChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={handleDescriptionChange} />
        </div>
        <button type="submit" disabled={submitting}>Submit</button>
      </form>
    </>
  )
}