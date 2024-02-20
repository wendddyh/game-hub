import thumbsUp from '../assets/thumbs up.png'
import bullsEye from '../assets/bullsye.png'
import meh from '../assets/meh.png'
import { Image, ImageProps } from '@chakra-ui/react';

interface Props{
  rating: number;
}

const Emoji = ({rating}: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps }  = {
    3: {src: meh, alt: 'meh'},
    4: {src: thumbsUp, alt: 'recommended'},
    5: {src: bullsEye, alt: 'exceptional'}
  }

  return (
    <Image{...emojiMap[rating] } boxSize='25px' />
  )
}

export default Emoji
