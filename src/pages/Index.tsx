import { useState, useEffect, useCallback } from 'react';
import { ModeProvider, useMode } from '@/contexts/ModeContext';
import LoadingScreen from '@/components/LoadingScreen';
import ModeToggle from '@/components/ModeToggle';
import CustomCursor from '@/components/CustomCursor';
import CommandPalette from '@/components/CommandPalette';
import WorkHero from '@/components/work/WorkHero';
import WorkAbout from '@/components/work/WorkAbout';
import WorkSkills from '@/components/work/WorkSkills';
import WorkExperience from '@/components/work/WorkExperience';
import WorkProjects from '@/components/work/WorkProjects';
import WorkCertifications from '@/components/work/WorkCertifications';
import WorkContact from '@/components/work/WorkContact';
import VibeHero from '@/components/vibe/VibeHero';
import VibeGamer from '@/components/vibe/VibeGamer';
import VibeChai from '@/components/vibe/VibeChai';
import VibePlaylist from '@/components/vibe/VibePlaylist';
import VibePeople from '@/components/vibe/VibePeople';
import VibeTwoAM from '@/components/vibe/VibeTwoAM';

const SiteContent = () => {
  const { mode } = useMode();

  useEffect(() => {
    if (mode === 'vibe') {
      document.documentElement.classList.add('vibe-mode');
    } else {
      document.documentElement.classList.remove('vibe-mode');
    }
  }, [mode]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <ModeToggle />
      <CustomCursor />
      <CommandPalette />

      {mode === 'work' ? (
        <main>
          <WorkHero />
          <WorkAbout />
          <WorkSkills />
          <WorkExperience />
          <WorkProjects />
          <WorkCertifications />
          <WorkContact />
        </main>
      ) : (
        <main className="font-vibe-display scanlines grain">
          <VibeHero />
          <VibeGamer />
          <VibeChai />
          <VibePlaylist />
          <VibePeople />
          <VibeTwoAM />
        </main>
      )}
    </div>
  );
};

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <ModeProvider>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <SiteContent />
    </ModeProvider>
  );
};

export default Index;
