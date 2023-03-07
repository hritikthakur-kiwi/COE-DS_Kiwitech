import { Schema, model, models } from 'mongoose';

const trendingSchema = new Schema({
  name:  {
    type: String,
    required: true,
  },
  url:  {
    type: String,
  },
  description:  {
    type: String,
  }
}, { timestamps: {} });

const Trending = models.Trending || model('Trending', trendingSchema);

export default Trending;