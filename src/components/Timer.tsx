import { useState, useEffect, FormEvent } from "react";
import TimerRow from "./TimerItem";

export interface TimerItem {
  id: number;
  title: string;
  time: number;
  isRunning: boolean;
}

const STORAGE_KEY = "timers";

const Timer: React.FC = () => {
  const [name, setName] = useState<string>("");

  const [timers, setTimers] = useState<TimerItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timers));
  }, [timers]);

  const addTimer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newTimer: TimerItem = {
      id: Date.now(),
      title: name,
      time: 0,
      isRunning: true,
    };

    setTimers((prev) => [...prev, newTimer]);
    setName("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) =>
        prev.map((timer) =>
          timer.isRunning ? { ...timer, time: timer.time + 1 } : timer,
        ),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleTimer = (id: number) => {
    setTimers((prev) =>
      prev.map((timer) =>
        timer.id === id ? { ...timer, isRunning: !timer.isRunning } : timer,
      ),
    );
  };

  const deleteTimer = (id: number) => {
    setTimers((prev) => prev.filter((timer) => timer.id !== id));
  };

  const formatTime = (seconds: number): string => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="flex flex-col items-center gap-[18px] min-h-[840px] pt-[80px] px-[16px] pb-[113px] xl:p-[250px_0_113px]">
      <h2 className="md:max-w-[570px] text-[35px] text-[#282B31] font-[300] leading-[50px] tracking-[1px]">
        <span className="font-[800] mr-[7px]">Why</span>
        do we use it?
      </h2>

      <p className="md:max-w-[570px] text-center text-[#676c75] leading-[30px] tracking-normal">
        This sounded nonsense to Alice, so she said nothing, but set off at once
        toward the Red Queen. To her surprise, she lost sight of her in a
        moment.
      </p>

      <div className="w-full min-h-[190px] mt-[42px] text-center bg-white rounded-xl md:w-auto">
        <form
          onSubmit={addTimer}
          className="w-full flex flex-col items-center gap-[30px] p-[40px_16px_39px_16px] md:flex-row md:w-[770px] md:justify-center"
        >
          <input
            type="text"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            placeholder="Timer Name"
            className="w-full h-[50px] text-[17px] rounded-[6px] border border-[#e7e8ea] bg-[#f8f9fa] px-[20px] md:w-[305px]"
          />

          <button
            type="submit"
            className="w-full min-w-[167px] h-[50px] text-[17px] font-bold tracking-[1px] text-white rounded-[6px] bg-[linear-gradient(163deg,#ff8e64,#ffe641)] md:w-auto transition-transform duration-200 hover:scale-105"
          >
            Create Timer
          </button>
        </form>

        <span className="block w-full h-[1px] bg-[#e7e8ea]"></span>

        <ul className="flex flex-col gap-[40px] p-[30px]">
          {timers.map((timer) => (
            <TimerRow
              key={timer.id}
              timer={timer}
              onToggle={toggleTimer}
              onDelete={deleteTimer}
              formatTime={formatTime}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timer;
