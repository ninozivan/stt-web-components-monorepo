import { newE2EPage } from '@stencil/core/testing';

describe('stt-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stt-button></stt-button>');

    const element = await page.find('stt-button');
    expect(element).toHaveClass('hydrated');
  });
});
