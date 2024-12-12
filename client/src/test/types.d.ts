import '@testing-library/jest-dom';

// Расширение типов для jest-matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}
