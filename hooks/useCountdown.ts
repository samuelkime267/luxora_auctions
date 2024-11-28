"use client";

import { useState, useEffect } from "react";
import { intervalToDuration } from "date-fns";

type CountdownType = {
  days: number | undefined;
  hours: number | undefined;
  minutes: number | undefined;
  seconds: number | undefined;
  months: number | undefined;
  years: number | undefined;
};

export const useCountdown = (targetDate: Date) => {
  const [countdown, setCountdown] = useState<CountdownType>({
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
    months: undefined,
    years: undefined,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance < 0) {
        clearInterval(interval);
      } else {
        const { days, hours, minutes, months, seconds, years } =
          intervalToDuration({
            start: new Date(),
            end: targetDate,
          });
        setCountdown({ days, hours, minutes, months, seconds, years });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
};
