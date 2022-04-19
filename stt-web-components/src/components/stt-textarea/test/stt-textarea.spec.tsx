import { newSpecPage } from '@stencil/core/testing';
import { SttTextarea } from '../stt-textarea';

describe('stt-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SttTextarea],
      html: `<stt-textarea></stt-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <stt-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stt-textarea>
    `);
  });
});
