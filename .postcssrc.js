// ESM (Echma Script Module)
// CommonJS (Node JS는 ESM이 아닌 CommonJS 방식)


// import autoprefixer from 'autoprefixer' 대신에

// export 대신에
module.exports = {
  plugins: [
    require('autoprefixer')
    // 일종의 스타일 보험
    // css가 구형 브라우저에서 동작하지 않을 수 있는 상황을 대비해서 보험을 들어 놓음
  ]
}