export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/SttButton',
  argTypes: {
    size: {
      options: ['default', 'extra-small', 'small', 'medium', 'large', 'extra-large'],
      control: { type: 'select' },
    },
    color: {
      options: ['default', 'dark', 'gray', 'light', 'blue', 'red', 'green', 'orange'],
      control: { type: 'select' },
    },
    shape: {
      options: ['default', 'block', 'square', 'circle'],
      control: { type: 'select' },
    },
    corners: {
      options: ['default', 'all', 'top', 'right', 'bottom', 'left'],
      control: { type: 'select' },
    },
  },
};

const Template = args => `<stt-button size="${args.size}" color="${args.color}" shape="${args.shape}" corners="${args.corners}">${args.content}</stt-button>`;

export const Example = Template.bind({});
Example.args = {
  size: 'medium',
  color: 'blue',
  shape: 'default',
  corners: '',
  content: 'Button',
};
