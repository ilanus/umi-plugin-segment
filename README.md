# umi-plugin-segment

Umi plugin to support segment

## use

### install

`yarn add --dev umi-plugin-segment`

### config

```js
export default {
  plugins: [
    [
     .....
    ],
    [
      'umi-plugin-segment',
      {
        key: 'segment key',
        judge: ()=>true // true or false
      },
    ],
  ],
  .....
}
```
