import { Component, Element, Event, Host, Prop, h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'stt-textarea',
  styleUrl: 'stt-textarea.scss',
  shadow: true,
})
export class SttTextarea {
  private nativeInput?: HTMLTextAreaElement;
  private valuesToEmit!: string[];
  private classes!: string;

  @Element() el!: HTMLElement;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.
   */
  @Prop() debounce = 100;

  /**
   * Instructional text that shows before the input has a value.
   */
  @Prop() placeholder?: string;

  /**
   * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
   */
  @Prop() cols?: number;

  /**
   * The number of visible text lines for the control.
   */
  @Prop() rows?: number;

  /**
   * If `true`, the element height will increase based on the value.
   */
  @Prop() autoGrow = false;

  /**
   * The value of the textarea.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  @Prop() corners: 'all' | 'left' | 'right' | 'top' | 'bottom';

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() valueChanged!: EventEmitter<any>;

  componentWillRender() {
    this.classes = `native-textarea ${this.corners ? `corners-${this.corners}` : ''} 1-1`;
  }

  private handleInput = () => {
    if (this.nativeInput) {
      this.value = this.nativeInput.value;
    }
    // this.inputEvent.emit(ev as InputEvent);
    this.newValueToEmit(this.value);
  };

  private getValue(): string {
    return this.value || '';
  }

  private newValueToEmit(value: string): void {
    if (typeof value !== 'string') {
      return;
    }

    if (!Array.isArray(this.valuesToEmit)) {
      this.valuesToEmit = [];
    }

    this.valuesToEmit.unshift(value);

    setTimeout(() => {
      const lastValue: string = this.valuesToEmit.pop();
      if (this.valuesToEmit?.length <= 0) {
        this.valueChanged.emit(lastValue);
      }
    }, this.debounce || 100);
  }

  render() {
    const value = this.getValue();

    return (
      <Host>
        <textarea class={this.classes} ref={el => (this.nativeInput = el)} placeholder={this.placeholder || ''} cols={this.cols} rows={this.rows} onInput={this.handleInput}>
          {value}
        </textarea>
      </Host>
    );
  }
}
