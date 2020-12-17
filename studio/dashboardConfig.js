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
                  buildHookId: '5fdb757bad162e459dc2170f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8zd6jsb2',
                  apiId: '4398c29d-3764-435e-853b-31871e339531'
                },
                {
                  buildHookId: '5fdb757b3e054a19b1843703',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ps2wao2j',
                  apiId: '4a3edbd5-fbb6-4071-87a7-d475c7eaa4ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hjludwig/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ps2wao2j.netlify.app', category: 'apps'}
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
