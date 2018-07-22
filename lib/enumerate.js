const {Transform} = require('stream')


module.exports = function(
  {
    end = Infinity,
    idField = 'id',
    start = 0,
    ...options
  } = {}
) {
  return new Transform({
    ...options,
    objectMode: true,
    transform(chunk, _, callback)
    {
      if(start >= end) return callback(null, null)

      chunk[idField] = start++

      callback(null, chunk)
    }
  })
}
