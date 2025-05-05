// 'use client';
// import { useAudioPlayer } from '@/context';
// import { ControlPanelUI, SVGIcon } from '@/components'; // твоя заготовка

// export const ControlPanelContainer = () => {
//   const { playTrack /*, togglePlayPause*/, stopTrack, isPlaying } =
//     useAudioPlayer();
//   const sampleTrack =
//     'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

//   const handlePlay = () => {
//     if (isPlaying) {
//       stopTrack();
//     } else {
//       playTrack(sampleTrack);
//     }
//   };

//   const handlePrev = () => {
//     console.log('Previous track');
//   };

//   const handleNext = () => {
//     console.log('Next track');
//   };

//   const handleLike = () => {
//     console.log('Liked track');
//   };

//   const handleGoToList = () => {
//     console.log('Go to track list');
//   };

//   return (
//     <ControlPanelUI
//       onTogglePlay={handlePlay}
//       playBtnContent={
//         isPlaying ? (
//           <SVGIcon name="stop" alt="stop icon" />
//         ) : (
//           <SVGIcon name="play" alt="play icon" />
//         )
//       }
//       onNextvClick={handleNext}
//       nextBtnContent={<SVGIcon name="next" alt="next icon" />}
//       onPrevClick={handlePrev}
//       prevBtnContent={<SVGIcon name="prev" alt="prev icon" />}
//       onLikeBtnClick={handleLike}
//       likeBtnContent={<SVGIcon name="heart" alt="like icon" />}
//       onGoToListBtnClick={handleGoToList}
//       goToListContent={<SVGIcon name="list" alt="list icon" />}
//       stopBtnContent={<SVGIcon name="stop" alt="stop icon" />}
//     />
//   );
// };

import { ControlPanelUI, SVGIcon } from "@/components";

type Props = {
  onTogglePlay: () => void;
  isPlaying: boolean;
  
  duration: number;
};

export const ControlPanelContainer = ({ onTogglePlay, isPlaying , duration }: Props) => {
  return (
    <ControlPanelUI
    duration={duration}
      onTogglePlay={onTogglePlay}
      playBtnContent={
                isPlaying ? (
                  <SVGIcon name="stop" alt="stop icon" />
                ) : (
                  <SVGIcon name="play" alt="play icon" />
                )
              }
              onNextvClick={() => {}}
              nextBtnContent={<SVGIcon name="next" alt="next icon" />}
              onPrevClick={() => {}}
              prevBtnContent={<SVGIcon name="prev" alt="prev icon" />}
              onLikeBtnClick={() => {}}
              likeBtnContent={<SVGIcon name="heart" alt="like icon" />}
              onGoToListBtnClick={() => {}}
              goToListContent={<SVGIcon name="list" alt="list icon" />}
              stopBtnContent={<SVGIcon name="stop" alt="stop icon" />}
    />
  );
};
