export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/SttButton',
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    color: {
      options: ['black', 'green', 'blue', 'red'],
      control: { type: 'select' },
    },
  },
};

const Template = args => `<stt-button size="${args.size}" color="${args.color}">StencilJS Button</stt-button>`;

export const Example = Template.bind({});
Example.args = {
  size: 'medium',
  color: 'blue'
};
