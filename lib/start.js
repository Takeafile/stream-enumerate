const {Transform} = require('stream')


module.exports = function(
  {
    end = Infinity,
    idField = 'start',
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

      chunk[idField] = start
      start += (chunk.length || 1)

      callback(null, chunk)
    }
  })
}
