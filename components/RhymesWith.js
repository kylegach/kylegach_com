import React, { Component } from 'react'


class RhymesWith extends Component {

  render() {
    const rhyme = () => {
      const rhymes = ['batch', 'hatch', 'latch', 'match', '’natch', 'patch', 'scratch', 'snatch', 'thatch']
      const min = 1, max = rhymes.length
      const index = Math.floor(Math.random() * (max - min + 1)) + min;
      return rhymes[index - 1]
    }

    return (
      <p className="fs-5 italic">Rhymes with {rhyme() || 'patch'}.</p>
    )
  }
}

export default RhymesWith
