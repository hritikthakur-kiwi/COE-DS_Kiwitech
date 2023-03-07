import { Schema, model, models } from 'mongoose';

const blogSchema = new Schema({
  title:  {
    type: String,
    required: true,
  },
  image:  {
    type: String,
  },
  content:  {
    type: String,
    required: true
  },
  metaTitle:  {
    type: String,
  },
  metaDescription:  {
    type: String,
  },
}, { timestamps: {} });

const Blogs = models.Blogs || model('Blogs', blogSchema);

export default Blogs;