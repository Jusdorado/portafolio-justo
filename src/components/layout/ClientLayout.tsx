'use client';

import { useState } from 'react';
import { LoadingProvider } from '../../providers/LoadingProvider';
import LoadingScreen from '../ui/LoadingScreen';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  return (
    <LoadingProvider>
      {!showContent && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {showContent && children}
    </LoadingProvider>
  );
};

export default ClientLayout;
