import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'stt-checkbox',
  styleUrl: 'stt-checkbox.scss',
  shadow: true,
})
export class SttCheckbox {
  @Prop() size: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  @Prop() color: 'dark' | 'gray' | 'light' | 'red' | 'green' | 'blue' | 'orange';
  @Prop() shape: 'default' | 'circle';
  @Prop() corners: 'all' | 'left' | 'right' | 'top' | 'bottom';

  classes: string;

  componentWillRender() {
    this.classes = `${this.size || ''} ${this.color || ''} ${this.shape || ''} ${this.corners ? `corners-${this.corners}` : ''} 1-6`;
  }

  render() {
    return (
      <Host class={this.classes}>
        <svg class="checkbox-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
        </svg>
      </Host>
    );
  }
}
