import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mocking react-intersection-observer
vi.mock('react-intersection-observer', () => ({
  InView: ({ children }) => children({ inView: true, ref: () => {} }),
}));