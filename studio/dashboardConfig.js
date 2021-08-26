export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6127970094d8643459a8f6f7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1ad7ekk4',
                  apiId: 'dd43b768-7d49-4c34-9b47-348a90b057ae'
                },
                {
                  buildHookId: '612797005f4a1a3af300f465',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-w5puo86f',
                  apiId: 'd75a0307-f33d-451d-8fdc-00772eb1d874'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Allendels24/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-w5puo86f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
