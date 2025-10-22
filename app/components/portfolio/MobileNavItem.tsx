import React from "react";

interface MobileNavItemProps {
  id: string;
  label?: string;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

export const MobileNavItem: React.FC<MobileNavItemProps> = ({
  id,
  label,
  activeSection,
  scrollToSection,
  setMobileMenuOpen,
}) => {
  const displayName = label || id.charAt(0).toUpperCase() + id.slice(1);
  const isActive = activeSection === id;

  const handleClick = () => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <button
      className={`block w-full text-left px-4 py-3 text-base font-medium ${
        isActive
          ? "text-white bg-red-600"
          : "text-gray-300 hover:text-white hover:bg-red-800/20"
      }`}
      onClick={handleClick}
    >
      {displayName}
    </button>
  );
};
