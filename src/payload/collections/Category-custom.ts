import { CollectionConfig } from 'payload/types'
import { slugField } from '../fields/slug'

const CategoryCustom: CollectionConfig = {
  slug: 'categories-custom',
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

export default CategoryCustom
