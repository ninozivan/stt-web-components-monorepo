# stt-textarea



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                                                                                             | Type                                              | Default     |
| ------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------- |
| `autoGrow`    | `auto-grow`   | If `true`, the element height will increase based on the value.                                                                                                         | `boolean`                                         | `false`     |
| `cols`        | `cols`        | The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.                                                  | `number`                                          | `undefined` |
| `corners`     | `corners`     |                                                                                                                                                                         | `"all" \| "bottom" \| "left" \| "right" \| "top"` | `undefined` |
| `debounce`    | `debounce`    | Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`. | `number`                                          | `100`       |
| `placeholder` | `placeholder` | Instructional text that shows before the input has a value.                                                                                                             | `string`                                          | `undefined` |
| `rows`        | `rows`        | The number of visible text lines for the control.                                                                                                                       | `number`                                          | `undefined` |
| `value`       | `value`       | The value of the textarea.                                                                                                                                              | `string`                                          | `''`        |


## Events

| Event          | Description                             | Type               |
| -------------- | --------------------------------------- | ------------------ |
| `valueChanged` | Emitted when a keyboard input occurred. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
