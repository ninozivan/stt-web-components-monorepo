export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/SttButton',
};

const Template = args => `<stt-button size="${args.size}">Button</stt-button>`;

export const Example = Template.bind({});
Example.args = {
  size: 'm',
};
