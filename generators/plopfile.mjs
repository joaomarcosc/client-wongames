// eslint-disable-next-line import/no-anonymous-default-export
export default function (plop) {
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'controller name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.spec.tsx',
        templateFile: 'templates/index.spec.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.stories.tsx',
        templateFile: 'templates/index.stories.tsx.hbs'
      }
    ]
  })
}
