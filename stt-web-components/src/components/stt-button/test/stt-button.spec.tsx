import { newSpecPage } from '@stencil/core/testing';
import { SttButton } from '../stt-button';

describe('stt-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SttButton],
      html: `<stt-button></stt-button>`,
    });
    expect(page.root).toEqualHtml(`
      <stt-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stt-button>
    `);
  });
});
