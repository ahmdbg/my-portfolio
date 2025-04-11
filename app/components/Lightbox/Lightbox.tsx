import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

interface LightboxProps {
    isOpen: boolean;
    imageSrc: string;
    onClose: () => void;
}

export default function Lightbox({ isOpen, imageSrc, onClose }: LightboxProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        className="absolute top-4 right-4 p-2 rounded-full bg-[#003459]/50 text-[#adebff] hover:bg-[#004879] transition-colors z-[102]"
                    >
                        <X size={24} />
                    </button>
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        className="relative w-[90vw] h-[90vh] z-[101]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={imageSrc}
                            alt="Lightbox image"
                            fill
                            className="object-contain"
                            quality={100}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}