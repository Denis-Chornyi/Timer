import { useState, useEffect, FormEvent } from 'react';
import TimerRow from './TimerItem';
import { normalizeTimer } from '../../utils/normalizeTimer';
import { getDefaultTitle, calculateTime, formatTime } from '../../utils/timer';

export type TimerItem = {
  id: number;
  title: string;
  startTime: number;
  elapsed: number;
  isRunning: boolean;
};

const STORAGE_KEY = 'timers';

const Timer: React.FC = () => {
  const [name, setName] = useState('');

  const [timers, setTimers] = useState<TimerItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return [];

      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed.map(normalizeTimer) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timers));
  }, [timers]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prev => [...prev]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addTimer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTimer: TimerItem = {
      id: Date.now(),
      title: name.trim() || getDefaultTitle(),
      startTime: Date.now(),
      elapsed: 0,
      isRunning: true
    };

    setTimers(prev => [newTimer, ...prev]);
    setName('');
  };

  const toggleTimer = (id: number) => {
    setTimers(prev =>
      prev.map(timer => {
        if (timer.id !== id) return timer;

        if (timer.isRunning) {
          return {
            ...timer,
            isRunning: false,
            elapsed: timer.elapsed + (Date.now() - timer.startTime)
          };
        }

        return {
          ...timer,
          isRunning: true,
          startTime: Date.now()
        };
      })
    );
  };

  const deleteTimer = (id: number) => {
    setTimers(prev => prev.filter(timer => timer.id !== id));
  };

  return (
    <div className="flex flex-col items-center gap-[18px] min-h-[840px] pt-[80px] px-[16px] pb-[113px] xl:p-[249px_0_113px]">
      <h2 className="md:max-w-[570px] text-[35px] text-[#282B31] font-[300] leading-[50px] tracking-[1px]">
        <span className="font-[800] mr-[11px]">Why</span>
        do we use it?
      </h2>

      <p className="md:max-w-[570px] text-center text-[#676c75] leading-[30px] tracking-normal">
        This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red
        Queen.
      </p>

      <div className="w-full min-h-[190px] mt-[42px] text-center bg-white rounded-xl md:w-auto">
        <form
          onSubmit={addTimer}
          className="w-full flex flex-col items-center gap-[20px] p-[40px_16px_30px_16px] md:flex-row md:w-[770px] md:justify-center"
        >
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Timer Name"
            className="w-full h-[50px] text-[17px] rounded-[6px] border border-[#e7e8ea] bg-[#f8f9fa] px-[20px] md:w-[305px]"
          />

          <button
            type="submit"
            className="w-full min-w-[165px] h-[50px] text-[17px] font-bold text-white rounded-[6px] bg-gradient-to-r from-orange-400 to-yellow-300 hover:scale-105 transition"
          >
            Create Timer
          </button>
        </form>

        <span className="block w-full h-[1px] bg-[#e7e8ea]"></span>

        <ul className="flex flex-col gap-[40px] p-[30px]">
          {timers.map(timer => (
            <TimerRow
              key={timer.id}
              timer={timer}
              onToggle={toggleTimer}
              onDelete={deleteTimer}
              formatTime={formatTime}
              time={calculateTime(timer)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timer;
