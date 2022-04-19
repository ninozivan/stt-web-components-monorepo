import { newE2EPage } from '@stencil/core/testing';

describe('stt-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stt-textarea></stt-textarea>');

    const element = await page.find('stt-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
