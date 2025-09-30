import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Mock all components
jest.mock('@/components/layout/Header', () => {
  return function MockHeader() {
    return <header data-testid="header">Header</header>;
  };
});

jest.mock('@/components/sections/Hero', () => {
  return function MockHero() {
    return <section data-testid="hero">Hero Section</section>;
  };
});

jest.mock('@/components/sections/About', () => {
  return function MockAbout() {
    return <section data-testid="about">About Section</section>;
  };
});

jest.mock('@/components/sections/Contact', () => {
  return function MockContact() {
    return <section data-testid="contact">Contact Section</section>;
  };
});

jest.mock('@/components/layout/Footer', () => {
  return function MockFooter() {
    return <footer data-testid="footer">Footer</footer>;
  };
});

// Mock other sections
const mockSections = [
  'Stats', 'Experience', 'Education', 'Skills', 
  'Projects', 'Services', 'Testimonials', 'CTA'
];

mockSections.forEach(section => {
  jest.mock(`@/components/sections/${section}`, () => {
    return function MockSection() {
      return <section data-testid={section.toLowerCase()}>{section} Section</section>;
    };
  });
});

// Mock analytics
jest.mock('@/lib/analytics', () => ({
  trackEvent: jest.fn(),
}));

describe('Home Page', () => {
  it('renders all main sections', () => {
    render(<Home />);
    
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('contact')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('has proper section structure with IDs', () => {
    render(<Home />);
    
    expect(screen.getByRole('main')).toBeInTheDocument();
    
    // Check for section IDs
    const sections = ['inicio', 'sobre-mi', 'experiencia', 'formacion', 'habilidades', 'proyectos', 'contacto'];
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      expect(section).toBeInTheDocument();
    });
  });

  it('applies correct CSS classes', () => {
    render(<Home />);
    
    const main = screen.getByRole('main');
    expect(main).toHaveClass('min-h-screen');
  });
});
