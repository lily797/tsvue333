import hyRequest from '..'

hyRequest
  .request({
    url: '/home/multidata'
  })
  .then(res => {
    console.log(res.data)
  })
