import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'stt-button',
  styleUrl: 'stt-button.css',
  shadow: true,
})
export class SttButton {
  @Prop() size: string;
  @Prop() color: string;

  classes: string;

  componentWillRender(){
    this.classes = `${this.size} ${this.color} xxxx`
  }

  render() {
    return (
      <Host class={this.classes}>
        <slot></slot>
      </Host>
    );
  }
}
