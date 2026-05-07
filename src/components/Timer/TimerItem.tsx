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
    <li className="flex items-center justify-around">
      <span className="text-blue-500 font-bold w-[170px] text-start truncate">{timer.title}</span>

      <div className={`px-6 py-3 rounded-md ${timer.isRunning ? 'bg-gray-200' : 'bg-pink-500/15'}`}>
        {formatTime(time)}
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => onToggle(timer.id)}
          className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center"
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
