/*
 * text-image block
 * Authored as a single-row, 2-cell table: text/CTA cell | image cell.
 * Renders a promo strip pairing a heading + copy + CTA with a supporting
 * image, matching the Datacom "text-with-image" component.
 */
import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const row = block.children[0];
  if (!row) return;
  const [textCell, imageCell] = [...row.children];

  block.textContent = '';

  const content = document.createElement('div');
  content.className = 'text-image-content';
  if (textCell) content.append(...textCell.childNodes);

  const imageWrap = document.createElement('div');
  imageWrap.className = 'text-image-media';
  if (imageCell) imageWrap.append(...imageCell.childNodes);

  block.append(content, imageWrap);

  imageWrap.querySelectorAll('picture > img').forEach((img) => {
    img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
  });

  // Style the last link in the content as a CTA button.
  const links = content.querySelectorAll('a');
  const cta = links[links.length - 1];
  if (cta) {
    cta.classList.add('button', 'secondary');
    if (cta.parentElement.tagName === 'P') {
      cta.parentElement.classList.add('button-container');
    }
  }
}
