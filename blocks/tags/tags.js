/*
 * tags block
 * Authored as a 2-column table: group label | comma-separated values.
 * Renders the "Related industries" / "Related solutions" tag groups that
 * sit alongside the article body on a Datacom-style insights article
 * (source markup: article-body__tag-ctn / article-body__tag-header /
 * article-body__tag-list / article-body__tag). Any number of rows /
 * groups is supported, so new tag categories can be authored without a
 * code change.
 */
export default function decorate(block) {
  const groups = [...block.children].map((row) => {
    const cells = [...row.children];
    if (cells.length < 2) return null;
    const label = cells[0].textContent.trim();
    const values = cells[1].textContent
      .split(',')
      .map((v) => v.trim())
      .filter(Boolean);
    return { label, values };
  }).filter(Boolean);

  block.textContent = '';

  groups.forEach(({ label, values }) => {
    if (!values.length) return;

    const group = document.createElement('div');
    group.className = 'tags-group';

    const header = document.createElement('div');
    header.className = 'tags-group-header';
    header.textContent = label;
    group.append(header);

    const list = document.createElement('div');
    list.className = 'tags-group-list';
    values.forEach((value) => {
      const tag = document.createElement('span');
      tag.className = 'tags-tag';
      tag.textContent = value;
      list.append(tag);
    });
    group.append(list);

    block.append(group);
  });
}
