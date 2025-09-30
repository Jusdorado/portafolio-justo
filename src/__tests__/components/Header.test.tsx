import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/layout/Header';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock analytics
jest.mock('@/lib/analytics', () => ({
  trackEvent: jest.fn(),
}));

describe('Header', () => {
  beforeEach(() => {
    // Mock getElementById
    const mockElement = {
      scrollIntoView: jest.fn(),
      getBoundingClientRect: () => ({
        top: 100,
        bottom: 200,
      }),
    };
    
    document.getElementById = jest.fn().mockReturnValue(mockElement);
  });

  it('renders the header with logo and navigation', () => {
    render(<Header />);
    
    expect(screen.getByText('JG')).toBeInTheDocument();
    expect(screen.getByText('Justo García')).toBeInTheDocument();
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Sobre mí')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  it('shows mobile menu when hamburger is clicked', () => {
    render(<Header />);
    
    const mobileMenuButton = screen.getByLabelText('Toggle mobile menu');
    fireEvent.click(mobileMenuButton);
    
    // Mobile menu should be visible
    expect(screen.getAllByText('Inicio')).toHaveLength(2); // Desktop + Mobile
  });

  it('scrolls to section when navigation item is clicked', () => {
    render(<Header />);
    
    const aboutLink = screen.getByText('Sobre mí');
    fireEvent.click(aboutLink);
    
    expect(document.getElementById).toHaveBeenCalledWith('sobre-mi');
  });

  it('has accessible navigation', () => {
    render(<Header />);
    
    const nav = screen.getByRole('banner');
    expect(nav).toBeInTheDocument();
    
    const contactButton = screen.getByText('Contáctame');
    expect(contactButton).toBeInTheDocument();
  });
});
