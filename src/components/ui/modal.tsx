// src/components/ui/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <button onClick={onClose} className="text-red-500 text-xl font-bold">&times;</button>
        </div>
        {children}
      </div>
    </div>
  );
}
