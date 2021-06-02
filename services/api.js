import fs from 'fs';
/**
 * fs é um módulo nativo do Node,
 * não precisamos instalar porque
 * ele vem com o node.
 * 
 * Esse modulo é para ter acesso
 * aos arquivos do computador.
 */
import { join } from 'path';
 /**
  * path é outro módulo nativo do
  * Node. Estamos buscando a função
  * join dentro desse módulo
  * 
  * join é uma função usada para unir
  * caminhos (paths) sem ter muito
  * trabalho, e ajudando para funcionar
  * em sistemas operacionais diferentes.
  */
import matter from 'gray-matter';


 /**
  * Primeiros definimos a rota onde estão
  * nossos posts.
  * 
  * process.cwd() é uma função do Node
  * que responde o caminho inicial até a
  * pasta onde o node está rodando, que
  * no nosso caso é a pasta onde temos
  * nosso package.json.
  */

const postsDirectory = join(process.cwd(), '/posts');

function getMarkdownsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPost(slugOrFilename, fields = []) {
  const slug = slugOrFilename.replace(/\.md$/, '');
  const directory = join(postsDirectory, `${ slug }.md`);
  const fileContents = fs.readFileSync(directory, 'utf8');

  
  const { data, content } = matter(fileContents);

  /**
   * Recebendo o campo fields, podemos criar nossa
   * postagem filtrada
   */
  const post = {};

  /**
   * Faremos um loop dentro dos campos necessários
   * para preencher nosso objeto post.
   */
  fields.forEach(field => {
    // Se houver o campo conteúdo, o adicionamos
    if (field === 'content') post[field] = content;
    // Se houver o campo slug, o adicionamos
    if (field === 'slug') post[field] = slug;
    /**
     * Se houver o campo dentro do cabeçalho do
     * markdown, o adicionamos no post
     */
    if (data[field]) post[field] = data[field];
  })

  /**
   * Retornamos o nosso post filtrado
   */
  return post;
}

/**
 * Na função getAllPosts inserimos um novo
 * parâmetro para escolher os campos que
 * queremos. Ele é um array com a chave dos
 * campos que queremos.
 */
export function getAllPosts(fields = []) {
  const slugs = getMarkdownsFiles();
  
  const posts = slugs
    /**
     * Passamos o Array de campos para dentro
     * da função getPost.
     */
    
    .map(slug => getPost(slug, fields))
    /**
     * Usaremos o .sort() para ordernar nossa
     * listagem de posts por data.
     */
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}