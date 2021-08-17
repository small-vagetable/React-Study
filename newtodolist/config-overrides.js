//配置具体的修改规则
// const { override, fixBabelImports } = require('customize-cra');
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const CracoLessPlugin = require('craco-less');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: 'css',
    style:true
  }),
//   addLessLoader({
//     lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
//       modifyVars: {
//         'primary-color': '#1DA57A',
//         'link-color': '#1DA57A',
//         'border-radius-base': '2px',
//       },
//       javascriptEnabled: true,
//     },
//   }),
  addLessLoader({
    lessOptions: {
        modifyVars: { '@primary-color': '#ffA57A' },
        javascriptEnabled: true,
    }, 
  }),
);