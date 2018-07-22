const {enumerate} = require('..')


test('basic', function(done)
{
  const stream = enumerate()

  stream.write({value: 'a'})
  stream.write({value: 'b'})

  stream.once('data', function(data)
  {
    expect(data).toEqual({id: 0, value: 'a'})

    stream.once('data', function(data)
    {
      expect(data).toEqual({id: 1, value: 'b'})

      done()
    })
  })
})

test('end', function(done)
{
  const stream = enumerate({end: 1})

  stream.write({value: 'a'})
  stream.write({value: 'b'})

  stream.once('data', function(data)
  {
    expect(data).toEqual({id: 0, value: 'a'})

    done()
  })
})
