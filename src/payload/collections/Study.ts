import { CollectionConfig } from 'payload/types'
import { slugField } from '../fields/slug'

const Study: CollectionConfig = {
  slug: 'studies',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    slugField(),
  ],
}

export default Study
