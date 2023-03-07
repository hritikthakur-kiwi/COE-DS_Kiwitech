import { Schema, model, models } from 'mongoose';

const caseStudiesSchema = new Schema({
  name:  {
    type: String,
    required: true,
  },
  image:  {
    type: String,
  },
  pdf:  {
    type: String,
  },
  description:  {
    type: String,
  },
}, { timestamps: {} });

const CaseStudies = models.CaseStudies || model('CaseStudies', caseStudiesSchema);

export default CaseStudies;