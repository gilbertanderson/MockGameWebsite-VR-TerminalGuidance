import { motion, AnimatePresence } from "motion/react";

interface LoadingOverlayProps {
  isLoading: boolean;
}

export function LoadingOverlay({ isLoading }: LoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
