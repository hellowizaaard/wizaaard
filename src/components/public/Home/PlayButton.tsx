import { TbPlayerPlayFilled } from 'react-icons/tb';

const PlayButton = () => (
  <div className="p-[28px] bg-slate-500 rounded-full">
    <div className="p-[34px] bg-gray-400 rounded-full">
      <div className="p-[29px] bg-gray-300 rounded-full">
        <div className="p-5 bg-white rounded-full">
          <TbPlayerPlayFilled className="w-[34px] h-[34px]" />
        </div>
      </div>
    </div>
  </div>
);

export default PlayButton;
