import { useState } from 'react';
import axios from 'axios';

export default function AddBlogPage() {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [pdf, setPdf] = useState('')
  const [description, setDescription] = useState('')
  const [submitting, setSubmitting] = useState(false);

  const handleNameChange = (event) => setName(event.target.value)
  const handleImageChange = (event) => setImage(event.target.value)
  const handlePDFChange = (event) => setPdf(event.target.value)
  const handleDescriptionChange = (event) => setDescription(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    try {
      const data = JSON.stringify({
        name,
        image,
        pdf,
        description
      });
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/api/case-studies/add",
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
      <h1>Add a case studies Post</h1>
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
          <label htmlFor="pdf">pdf URL:</label>
          <input type="text" id="pdf" value={pdf} onChange={handlePDFChange} />
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