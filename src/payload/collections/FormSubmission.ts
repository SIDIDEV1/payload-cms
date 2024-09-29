import { CollectionConfig } from 'payload/types'

const FormSubmission: CollectionConfig = {
  slug: 'form-submission',
  fields: [
    {
      type: 'text',
      name: 'from',
      label: 'From email',
    },
    {
      type: 'textarea',
      name: 'message',
      label: 'Message',
    },
    {
      type: 'text',
      name: 'source',
      label: 'Source',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
}

export default FormSubmission
