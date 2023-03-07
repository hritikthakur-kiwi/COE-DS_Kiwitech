import { Schema, model, models } from 'mongoose';

const eventSchema = new Schema({
  name:  {
    type: String,
    required: true,
  },
  image:  {
    type: String,
  },
  registrationUrl:  {
    type: String,
  },
  location:  {
    type: String,
  },
  startDateEvent:  {
    type: Date,
  },
  endDateEvent:  {
    type: Date,
  },
  liveLink:  {
    type: String,
  },
  youTubeVideoLink: {
    type: String
  }
}, { timestamps: {} });

const Events = models.Events || model('Events', eventSchema);

export default Events;