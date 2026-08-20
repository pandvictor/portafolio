import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type AnimatedCounterProps = {
  /** Raw copy such as "500k+ users" — the leading number is what counts up. */
  value: string;
  /** Seconds the count-up takes. */
  duration?: number;
};

const NUMERIC = /^(\D*)(\d[\d,.]*)(.*)$/s;

const parse = (value: string) => {
  const match = NUMERIC.exec(value.trim());
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  const decimals = digits.includes(".") ? digits.split(".")[1].length : 0;
  const target = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(target)) return null;
  return { prefix, target, suffix, decimals, grouped: digits.includes(",") };
};

/**
 * Counts a stat up from zero the first time it scrolls into view.
 *
 * Falls back to the literal string when the value has no leading number, or
 * when the visitor prefers reduced motion.
 */
export const AnimatedCounter = ({ value, duration = 1.6 }: AnimatedCounterProps) => {
  const parsed = useMemo(() => parse(value), [value]);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(() =>
    parsed ? `${parsed.prefix}0${parsed.suffix}` : value
  );

  useEffect(() => {
    if (!parsed) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    const format = (n: number) => {
      const fixed = n.toFixed(parsed.decimals);
      return parsed.grouped
        ? Number(fixed).toLocaleString(undefined, {
            minimumFractionDigits: parsed.decimals,
            maximumFractionDigits: parsed.decimals,
          })
        : fixed;
    };

    const controls = animate(0, parsed.target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) =>
        setDisplay(`${parsed.prefix}${format(latest)}${parsed.suffix}`),
      onComplete: () => setDisplay(value),
    });

    return () => controls.stop();
  }, [duration, inView, parsed, reduceMotion, value]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {display}
    </span>
  );
};
