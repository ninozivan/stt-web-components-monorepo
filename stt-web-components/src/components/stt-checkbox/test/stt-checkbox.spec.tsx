import { newSpecPage } from '@stencil/core/testing';
import { SttCheckbox } from '../stt-checkbox';

describe('stt-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SttCheckbox],
      html: `<stt-checkbox></stt-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <stt-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stt-checkbox>
    `);
  });
});
