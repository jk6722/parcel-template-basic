console.log('Hello parcel!!!')

async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()