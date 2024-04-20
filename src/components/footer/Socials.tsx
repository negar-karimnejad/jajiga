import { PiInstagramLogo, PiTelegramLogo } from 'react-icons/pi';
import SocialLink from './SocialLink';
import Heading from './Heading';

function Socials() {
  return (
    <div>
      <Heading>با ما همراه شوید</Heading>
      <div className="flex w-full justify-center gap-2 md:flex-col">
        <SocialLink
          style="from-purple-600 via-red-600 to-orange-500"
          to="https://www.instagram.com/jajiga.iran"
          followers="700"
          icon={<PiInstagramLogo size={30} className="text-white" />}
        />
        <SocialLink
          style="from-sky-400 via-sky-500 to-sky-600"
          to="https://t.me/jajiga"
          followers="20"
          icon={<PiTelegramLogo size={25} className="text-white" />}
        />
      </div>
    </div>
  );
}

export default Socials;
