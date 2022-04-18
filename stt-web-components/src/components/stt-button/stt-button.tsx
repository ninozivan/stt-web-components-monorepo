import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'stt-button',
  styleUrl: 'stt-button.scss',
  shadow: true,
})
export class SttButton {
  @Prop() size: string;
  @Prop() color: string;
  @Prop() shape: string;
  @Prop() corners: boolean;

  classes: string;

  componentWillRender() {
    this.classes = `${this.size || ''} ${this.color || ''} ${this.shape || ''} ${this.corners ? 'corners' : ''} 1-2`;
  }

  render() {
    return (
      <Host class={this.classes}>
        <slot></slot>
      </Host>
    );
  }
}
