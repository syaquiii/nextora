// hooks/useCountdown.ts
import { useState, useEffect, useCallback } from "react";

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface UseCountdownReturn {
  timeLeft: TimeLeft;
  isExpired: boolean;
  formatNumber: (num: number) => string;
  resetCountdown: (hours: number) => void;
}

export const useCountdown = (initialHours: number = 9): UseCountdownReturn => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [targetTime, setTargetTime] = useState<number>(
    () => new Date().getTime() + initialHours * 60 * 60 * 1000
  );

  const formatNumber = useCallback((num: number): string => {
    return num.toString().padStart(2, "0");
  }, []);

  const resetCountdown = useCallback((hours: number) => {
    const newTargetTime = new Date().getTime() + hours * 60 * 60 * 1000;
    setTargetTime(newTargetTime);
    setIsExpired(false);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return {
    timeLeft,
    isExpired,
    formatNumber,
    resetCountdown,
  };
};
