const {start} = require('..')


test('object', function(done)
{
  const stream = start()

  stream.write({value: 'a'})
  stream.write({value: 'b'})

  stream.once('data', function(data)
  {
    expect(data).toEqual({start: 0, value: 'a'})

    stream.once('data', function(data)
    {
      expect(data).toEqual({start: 1, value: 'b'})

      done()
    })
  })
})

test('buffer', function(done)
{
  const stream = start()

  stream.write(Buffer.from('asdf'))
  stream.write(Buffer.from('1234'))

  stream.once('data', function(data)
  {
    expect(data.toString()).toEqual('asdf')
    expect(data.start).toBe(0)

    stream.once('data', function(data)
    {
      expect(data.toString()).toEqual('1234')
      expect(data.start).toBe(4)

      done()
    })
  })
})

test('end', function(done)
{
  const stream = start({end: 1})

  stream.write({value: 'a'})
  stream.write({value: 'b'})

  stream.once('data', function(data)
  {
    expect(data).toEqual({start: 0, value: 'a'})

    done()
  })
})
