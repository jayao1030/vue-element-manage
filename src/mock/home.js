import Mock from 'mockjs'

export default {
  getHomeData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: 'JavaScript',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'React',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'Vue',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'Angular',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'Node.js',
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
        ],
      },
    }
  },
}
