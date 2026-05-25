/// <reference types="vite/client" />

declare global {
  interface Window {
    /** URLs das imagens da clínica, populadas em main.tsx (espelha o bundle original). */
    __resources: {
      leo: string;
      clinica_fachada: string;
      clinica_sala: string;
      clinica_equipment: string;
      [key: string]: string;
    };
    /** Registrado pelo BookingModal para abrir o popup de agendamento. */
    openBookingModal?: () => void;
  }
}

export {};
