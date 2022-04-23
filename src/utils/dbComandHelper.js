/**
 *
 * @param {string} tabela tabela que deseja requisitar
 * @returns {string} `select * from ${tabela}`
 */
export const selecioneTudo = (tabela) => `select * from ${tabela}`;

/**
 * metodo reservado apenas para tabela bebidas
 * @param {string} body corpo da requisição
 * @param {string} tabela tabela que deseja inserir os valores
 * @returns {string} insert into ${tabela} (rows) values
 */
export const inserirBebidas = (obj, tabela) =>
  `insert into ${tabela}
    (nome, sabor, embalagem, ml, preco)
    values
(
    '${obj.nome}',
    '${obj.sabor}',
    '${obj.embalagem}',
    '${obj.ml}',
    '${obj.preco}'
)
`;
/**
 *
 * @param {string} coluna coluna que deseja usar como filtro
 * @param {string} valor valor aproximado que deseja usar como filtro
 * @param {string} tabela tabela que será filtrada
 * @returns {string} `select * from ${tabela} where ${coluna} like '%${valor}%'`
 */
export const filtro = (coluna, valor, tabela) =>
  `select * from ${tabela}
      where ${coluna} like '%${valor}%'`;

/**
 *  seleciona o item da tabela informada através do id
 * @param {string} id id que deseja buscar
 * @param {string} tabela tabela que deseja buscar
 * @returns {string} `select * from ${tabela} where id = ${id}`
 */
export const item = (id, tabela) => `select * from ${tabela}
where id = ${id}`;

/**
 *deleta o item com base no id informado
 * @param {string} id do item que deseja excluir
 * @param {*} tabela tabela que deseja utilizar
 * @returns {string} `delete from ${tabela} where id= ${id}`
 */
export const excluido = (id, tabela) =>
  `delete from ${tabela} where id = ${id}`;

/**
 * método reservado apenas para tabela bebidas
 * atualiza o item selecionado através da id
 * @param {string} id id do item que deseja atualizar
 * @param {string} tabela a qual o item selecionado pertence
 * @returns {string} `update ${tabela} set values
 */
export const atualizaBebida = (id, tabela) =>
  `update ${tabela} set nome =?, sabor= ?, embalagem = ?, ml= ?, preco=? where id= ${id}`;