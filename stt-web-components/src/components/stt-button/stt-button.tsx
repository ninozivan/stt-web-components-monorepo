import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stt-button',
  styleUrl: 'stt-button.css',
  shadow: true,
})
export class SttButton {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
