import { useEffect ,useState } from 'react';
import axios from 'axios';
import { getUseCaseByID } from '../../../../apiHelper';
import { useRouter } from 'next/router';

export default function EditBlogPage() {
const router = useRouter();
const [editId, setEditId] = useState('')
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
        _id:editId,
        name,
        image,
        pdf,
        description
    });
      const config = {
        method: "put",
        maxBodyLength: Infinity,
        url: "/api/case-studies/update",
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
      const id = (router.asPath.split("/admin/use-cases/edit/"))[1];
      const useCaseOne = await getUseCaseByID(id);
      setEditId(useCaseOne._id);
      setName(useCaseOne.name);
      setImage(useCaseOne.image);
      setPdf(useCaseOne.pdf);
      setDescription(useCaseOne.description);
      } catch (err) {
        router.back();
      }
    })()
  }, [])

  return (
    <>
      <h1>Edit the case studies</h1>
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