import { newE2EPage } from '@stencil/core/testing';

describe('stt-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stt-checkbox></stt-checkbox>');

    const element = await page.find('stt-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
