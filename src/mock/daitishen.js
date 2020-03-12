import Mock from 'mockjs';

Mock.mock('http:127.0.0.1/getListwork', {
  'list|1-100': [{
    date: '@date("yyyy-MM-dd")',
    name: '@name',
    address: '@county(true)',
  }],
});
