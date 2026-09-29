/*
 * article-header block
 * Authored as a 2-column table: label | value, rows in any order among
 * "Read time", "Author", "Description". Renders the byline/meta strip that
 * sits under the H1 and hero image on a Datacom-style insights article.
 */
export default function decorate(block) {
  const data = {};
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    if (cells.length < 2) return;
    const key = cells[0].textContent.trim().toLowerCase();
    data[key] = cells[1];
  });

  block.textContent = '';

  const top = document.createElement('div');
  top.className = 'article-header-top';

  if (data['read time']) {
    const readTime = document.createElement('div');
    readTime.className = 'article-header-readtime';
    readTime.innerHTML = `<span class="icon icon-clock"></span><span>${data['read time'].textContent.trim()}</span>`;
    top.append(readTime);
  }

  block.append(top);

  if (data.description) {
    const desc = document.createElement('p');
    desc.className = 'article-header-description';
    desc.append(...data.description.childNodes);
    block.append(desc);
  }

  const bottom = document.createElement('div');
  bottom.className = 'article-header-bottom';

  if (data.author) {
    const author = document.createElement('div');
    author.className = 'article-header-author';
    author.innerHTML = '<span class="article-header-author-icon"></span>';
    const name = document.createElement('span');
    name.textContent = data.author.textContent.trim();
    author.append(name);
    bottom.append(author);
  }

  block.append(bottom);
}
