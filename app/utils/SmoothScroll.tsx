export const smoothScrollTo = (targetId: string) => {
  const element = document.getElementById(targetId.replace('#', ''));
  if (element) {
    const headerHeight = 80; // Adjust based on your header height
    const targetPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

export const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  smoothScrollTo(href);
};