import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'stt-button',
  styleUrl: 'stt-button.scss',
  shadow: true,
})
export class SttButton {
  @Prop() size: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  @Prop() color: 'dark' | 'gray' | 'light' | 'red' | 'green' | 'blue' | 'orange';
  @Prop() shape: 'default' | 'block' | 'square' | 'circle';
  @Prop() corners: 'all' | 'left' | 'right' | 'top' | 'bottom';

  classes: string;

  componentWillRender() {
    this.classes = `${this.size || ''} ${this.color || ''} ${this.shape || ''} ${this.corners ? `corners-${this.corners}` : ''} 1-6`;
  }

  render() {
    return (
      <Host class={this.classes}>
        <slot></slot>
      </Host>
    );
  }
}
