import React, { useState } from 'react';

const useAudio = (src: string) : [playing: boolean, toggle: () => void, play: () => void] => {
  const [audio] = useState(new Audio(src));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying((prev) => !prev);

  const play = () => audio.play();

  return [playing, toggle, play];
}

export default useAudio;