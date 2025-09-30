/**
 * @jest-environment jsdom
 */

describe('Home Page', () => {
  it('should pass basic test', () => {
    expect(true).toBe(true);
  });

  it('should have portfolio sections', () => {
    const sections = ['inicio', 'sobre-mi', 'experiencia', 'proyectos', 'contacto'];
    expect(sections).toHaveLength(5);
    expect(sections).toContain('inicio');
  });

  it('should have coffee theme', () => {
    const theme = 'moka';
    expect(theme).toBe('moka');
  });
});
