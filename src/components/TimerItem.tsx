import React from 'react';
import { TimerItem } from './Timer';

interface TimerRowProps {
  timer: TimerItem;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  formatTime: (seconds: number) => string;
}

const TimerRow: React.FC<TimerRowProps> = ({ timer, onToggle, onDelete, formatTime }) => {
  return (
    <li className="flex items-center justify-around">
      <span className="text-blue-500 font-bold min-w-[170px] text-start">{timer.title}</span>

      <div className="bg-gray-200 px-6 py-3 rounded-md">{formatTime(timer.time)}</div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => onToggle(timer.id)}
          className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center"
          aria-label="Toggle timer"
        >
          {timer.isRunning ? (
            <img src="/images/pause.png" className="m-[0_auto]"></img>
          ) : (
            <img src="/images/play.png" className="m-[0_auto]"></img>
          )}
        </button>

        <button
          type="button"
          onClick={() => onDelete(timer.id)}
          className="w-[50px] h-[50px] rounded-md bg-gradient-to-r from-pink-500 to-orange-400 text-white"
          aria-label="Delete timer"
        >
          <img src="/images/delete.png" className="m-[0_auto]"></img>
        </button>
      </div>
    </li>
  );
};

export default TimerRow;
