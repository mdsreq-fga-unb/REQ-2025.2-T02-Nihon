"use client";

import FornecedorCard from "@/components/homePage/FornecedorCard";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { motion, useMotionValue, animate } from "framer-motion";


export function SuppliersCarousel() {
  const fornecedores = [
    '/images/datalogic.png',
    '/images/elginBematech.png',
    '/images/gelopar.png',
    '/images/gertec.png',
    '/images/starrett.png',
    // '/images/prix.png',
  ];
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;
  const [duration, setDuration] = useState(FAST_DURATION);
  let [firstRef, { width: firstWidth }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [vw, setVw] = useState(0);
  const GAP_PX = 32;

  useEffect(() => {
    const update = () => setVw(window.innerWidth || 0);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
  if (!firstWidth) return;
  let controls;
  let finalPosition = -(firstWidth + GAP_PX);

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    return controls?.stop;
  }, [rerender, xTranslation, duration, firstWidth, mustFinish]);

  return (
    <div className="w-full overflow-hidden bg-gray-200 h-20 flex items-center justify-center">
      <motion.div
        className="flex items-center gap-8 flex-nowrap"
        style={{ x: xTranslation, width: 'max-content', willChange: 'transform' }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {/* sequência 1 (medida) */}
        <div ref={firstRef} className="flex items-center gap-10 mr-8">
          {fornecedores.map((item, idx) => (
            <FornecedorCard image={item} key={`seq-0-${idx}`} />
          ))}
        </div>
        {/* renderiza sequências adicionais até cobrir viewport inteira */}
        {Array.from({ length: Math.max(1, firstWidth ? Math.ceil((vw + firstWidth) / firstWidth) - 1 : 1) }).map((_, seq) => (
          <div key={`seq-${seq + 1}`} className="flex items-center gap-8 mr-8">
            {fornecedores.map((item, idx) => (
              <FornecedorCard image={item} key={`seq-${seq + 1}-${idx}`} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
