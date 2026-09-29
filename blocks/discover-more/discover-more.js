/*
 * discover-more block
 * Authored as a table, one row per related-article card, four cells each:
 * image | tag | title (as a link) | description.
 * Renders a "Discover more" related-content card grid, matching the
 * Datacom "gallery" component used at the foot of insights articles.
 */
import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const heading = document.createElement('h2');
  heading.className = 'discover-more-heading';
  heading.textContent = 'Discover more';

  const list = document.createElement('ul');
  list.className = 'discover-more-list';

  [...block.children].forEach((row) => {
    const [imageCell, tagCell, titleCell, descCell] = [...row.children];
    const li = document.createElement('li');
    li.className = 'discover-more-card';

    const picture = imageCell?.querySelector('picture');
    const link = titleCell?.querySelector('a');
    const href = link?.getAttribute('href') || '#';

    const a = document.createElement('a');
    a.className = 'discover-more-card-link';
    a.href = href;

    const imageDiv = document.createElement('div');
    imageDiv.className = 'discover-more-card-image';
    if (picture) {
      imageDiv.append(picture);
      const img = picture.querySelector('img');
      if (img) picture.replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
    }

    const body = document.createElement('div');
    body.className = 'discover-more-card-body';

    if (tagCell && tagCell.textContent.trim()) {
      const tag = document.createElement('span');
      tag.className = 'discover-more-card-tag';
      tag.textContent = tagCell.textContent.trim();
      body.append(tag);
    }

    const title = document.createElement('h3');
    title.className = 'discover-more-card-title';
    title.textContent = link ? link.textContent.trim() : titleCell?.textContent.trim() || '';
    body.append(title);

    if (descCell && descCell.textContent.trim()) {
      const desc = document.createElement('p');
      desc.className = 'discover-more-card-desc';
      desc.textContent = descCell.textContent.trim();
      body.append(desc);
    }

    a.append(imageDiv, body);
    li.append(a);
    list.append(li);
  });

  block.textContent = '';
  block.append(heading, list);
}
