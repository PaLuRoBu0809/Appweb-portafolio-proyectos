import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
  projectId: '2xugp055',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [
      {
        name: 'project',
        title: 'Proyecto',
        type: 'document',
        fields: [
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
          },
          { name: 'title',       title: 'Título',     type: 'string' },
          { name: 'subtitle',    title: 'Subtítulo',  type: 'string' },
          { name: 'bannerImage', title: 'Banner',     type: 'image', options: { hotspot: true } },
          { name: 'description', title: 'Descripción',type: 'text' },
          { name: 'queHace',     title: 'Qué hace',   type: 'array', of: [{ type: 'string' }] },
          { name: 'stack',       title: 'Stack',      type: 'array', of: [{ type: 'string' }] },
          { name: 'highlights',  title: 'Highlights', type: 'array', of: [{ type: 'string' }] },
          {
            name: 'meta',
            title: 'Meta',
            type: 'object',
            fields: [
              { name: 'estado',        title: 'Estado',         type: 'string' },
              { name: 'tipo',          title: 'Tipo',           type: 'string' },
              { name: 'documentacion', title: 'Documentación',  type: 'string' },
            ],
          },
          {
            name: 'descargas',
            title: 'Descargas',
            type: 'array',
            of: [
                {
                type: 'object',
                fields: [
                    { name: 'nombre', title: 'Nombre', type: 'string' },
                    { name: 'sub',    title: 'Sub',    type: 'string' },
                    {
                    name: 'archivo',
                    title: 'Archivo',
                    type: 'file',
                    options: {
                        accept: '.pdf,.json,.zip,.docx'  // ajusta las extensiones que necesites
                    }
                    },
                ],
                },
            ],
            },
        ],
      },
    ],
  },
})