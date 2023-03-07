import { useEffect ,useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { getBlogByID } from '../../../../apiHelper';
import { useRouter } from 'next/router';
const Editor = dynamic(() => import("../../../../components/Common/Editor"), {
  ssr: false
});

export default function EditBlogPage() {
  const router = useRouter();
  const [editId, setEditId] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleImageChange = (event) => setImage(event.target.value)
  const handleContentChange = (value) => setContent(value);
  const handleMetaTitleChange = (event) => setMetaTitle(event.target.value);
  const handleMetaDescriptionChange = (event) => setMetaDescription(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    try {
      const data = JSON.stringify({
        _id:editId,
        title,
        image,
        content,
        metaTitle,
        metaDescription
      });
      const config = {
        method: "put",
        maxBodyLength: Infinity,
        url: "/api/blogs/update",
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
      const id = (router.asPath.split("/admin/blogs/edit/"))[1];
      const blog = await getBlogByID(id);
      setEditId(blog._id);
      setTitle(blog.title);
      setImage(blog.image);
      setContent(blog.content);
      setMetaTitle(blog.metaTitle);
      setMetaDescription(blog.metaDescription);
      } catch (err) {
        router.back();
      }
    })()
  }, [])

  return (
    <>
      <h1>Edit the Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} required />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" onChange={handleImageChange} value={image} />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <Editor defaultValue={content} handleContentChange={handleContentChange} />
        </div>
        <div>
          <label htmlFor="metaTitle">Meta Title:</label>
          <input type="text" id="metaTitle" value={metaTitle} onChange={handleMetaTitleChange} />
        </div>
        <div>
          <label htmlFor="metaDescription">Meta Description:</label>
          <textarea id="metaDescription" value={metaDescription} onChange={handleMetaDescriptionChange} />
        </div>
        <button type="submit" disabled={submitting}>Submit</button>
      </form>
    </>
  )
}