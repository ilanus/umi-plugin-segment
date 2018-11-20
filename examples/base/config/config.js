export default {
  plugins: [
    [
      '../../index.js',
      {
        key: '123',
        judge: () => process.env.NODE_ENV !== 'production'
      }
    ]
  ],
  singular: true
};
