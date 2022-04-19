export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/SttTextarea',
  argTypes: {
    corners: {
      options: ['default', 'all', 'top', 'right', 'bottom', 'left'],
      control: { type: 'select' },
    },
  },
};

const Template = args =>
  `<stt-textarea value="${args.content}" placeholder="${args.placeholder}" rows="${args.rows}" debounce="${args.debounce}" corners="${args.corners}"></stt-textarea>`;

export const Example = Template.bind({});
Example.args = {
  placeholder: 'Enter text',
  content: 'Some sample text',
  rows: 3,
  debounce: 300,
  corners: 'default',
};
