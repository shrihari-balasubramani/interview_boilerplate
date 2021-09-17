import { x } from '@xstyled/styled-components';

export const BannerWithText = ({ imgUrl }: { imgUrl: string }) => (
  <x.div backgroundColor="warm-gray-800">
    <img src={imgUrl} alt="gntm" />
  </x.div>
);
