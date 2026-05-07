import React from 'react';
import { TimerItem } from '.';

interface TimerRowProps {
  timer: TimerItem;
  time: number;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  formatTime: (ms: number) => string;
}

const TimerRow: React.FC<TimerRowProps> = ({ timer, time, onToggle, onDelete, formatTime }) => {
  return (
    <li className="flex items-center justify-between gap-[4px] md:gap-[20px]">
      <div className="relative group">
        <span className="w-[130px] text-start text-[20px] text-blue-500 font-[800] truncate block">
          {timer.title}
        </span>

        <div className="absolute left-0 -top-8 hidden group-hover:block bg-gray-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
          {timer.title}
        </div>
      </div>

      <div
        className={`px-6 py-3 rounded-md text-[17px] m-[0_4px] md:m-[0_21px_0_38px] ${timer.isRunning ? 'bg-gray-200' : 'bg-pink-500/15'}`}
      >
        {formatTime(time)}
      </div>

      <div className="flex gap-[4px] md:gap-[20px]">
        <button
          type="button"
          onClick={() => onToggle(timer.id)}
          className={`w-[50px] h-[50px] rounded-full ${timer.isRunning ? 'bg-gradient-to-br from-[#7956ec] to-[#2fb9f8]' : 'bg-gradient-to-br from-[#009fc5] to-[#3cecb0]'} text-white flex items-center justify-center`}
          aria-label="Toggle timer"
        >
          {timer.isRunning ? <img src="/images/pause.png" /> : <img src="/images/play.png" />}
        </button>

        <button
          type="button"
          onClick={() => onDelete(timer.id)}
          className="w-[50px] h-[50px] rounded-md bg-gradient-to-r from-pink-500 to-orange-400 text-white flex items-center justify-center"
          aria-label="Delete timer"
        >
          <img src="/images/delete.png" />
        </button>
      </div>
    </li>
  );
};

export default TimerRow;
