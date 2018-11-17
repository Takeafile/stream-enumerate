# stream-enumerate

Add a number ID to the chunks in a stream

This module allow to identify the data chunks based on their order inside the
stream, or based on their offset.

# Install

```sh
npm install stream-enumerate
```

# API

## enumerate

Identify data chunks consecutively

- *options*: options passed to underlying `Transform` stream
  - *end*: last ID assigned to data chunks, after it the stream will finish
  - *idField*: field where the data chunk ID will be stored
  - *start*: first ID assigned to data chunks

## start

Enumerate data chunks based on their offset

- *options*: options passed to underlying `Transform` stream
  - *end*: last ID/byte assigned to data chunks, after it the stream will finish
  - *idField*: field where the data chunk ID will be stored
  - *start*: first ID/byte assigned to data chunks
