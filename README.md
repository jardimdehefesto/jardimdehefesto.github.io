# Formas de criar o projeto

## Detalhe importante
 
no projeto se usa a data para organizar os posts, a data deve ser chamada com o comando 
``` bash
date +"%Y-%m-%dT%H:%M:%S%z"
``` 
no terminal e colado no campo Date no arquivo.md, seguir os arquivos anteriores 


## Projeto com Next Js
para criar um projeto com next js usa-se o comando:

```bash
npx create-next-app
# or
yarn create next-app
```

Se você quiser iniciar o projeto com typescript use  `--typescript` :

```bash
npx create-next-app --typescript
# or
yarn create next-app --typescript
```

### Projeto com Next Js + Styled Components
para criar um projeto com next js + Styled Components usa-se o comando:

```bash
npx create-next-app --example with-styled-components
# or
yarn create next-app --example with-styled-components
```

Se você quiser iniciar o projeto com typescript use  `--typescript` :

```bash
npx create-next-app --typescript --example with-styled-components
# or
yarn create next-app --typescript --example with-styled-components
```

## Para o Deploy
Para o Deploy coloque no package.json a linha export:

```json
"scripts": {
	"dev": "next",
	"build": "next build",
	"start": "next start",
	"export": "next export"
},
```

Assim ele criará a pasta out com o html estático pronto para uso

### Vídeo explicando bem esse início
[https://youtu.be/Ij-B0Yiizyw]

## Para Deploy com gh-pages
instale o gh-pages
no package.json deixe desta forma

```
"scripts": {
	"dev": "next",
	"build": "next build",
	"start": "next start",
	"export": "next export",
	"predeploy": "next build && next export",
	"deploy": "gh-pages -d out"
},
```








# ------>>>>>>>>> Abaixo daqui está o readme original que vem no projeto quando criado
# Example app with styled-components

This example features how you use a different styling solution than [styled-jsx](https://github.com/zeit/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs/advanced-features/custom-app) component.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-styled-components&project-name=with-styled-components&repository-name=with-styled-components)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-styled-components with-styled-components-app
# or
yarn create next-app --example with-styled-components with-styled-components-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Try it on CodeSandbox

[Open this example on CodeSandbox](https://codesandbox.io/s/github/vercel/next.js/tree/canary/examples/with-styled-components)

### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```

**pages/index.js**

```javascript
import StyledLink from '../components/StyledLink'

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
)
```

</details>
