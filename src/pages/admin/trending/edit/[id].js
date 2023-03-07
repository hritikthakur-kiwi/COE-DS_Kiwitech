import { useEffect ,useState } from 'react';
import axios from 'axios';
import { getTrendingByID } from '../../../../apiHelper';
import { useRouter } from 'next/router';

export default function EditBlogPage() {
const router = useRouter();
const [editId, setEditId] = useState('')
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
        _id:editId,
        name,
        url,
        description
    });
      const config = {
        method: "put",
        maxBodyLength: Infinity,
        url: "/api/trending/update",
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
      const id = (router.asPath.split("/admin/trending/edit/"))[1];
      const trendingOneItem = await getTrendingByID(id);
      setEditId(trendingOneItem._id);
      setName(trendingOneItem.name);
      setUrl(trendingOneItem.url);
      setDescription(trendingOneItem.description);
      } catch (err) {
        router.back();
      }
    })()
  }, [])

  return (
    <>
      <h1>Edit the Trending</h1>
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