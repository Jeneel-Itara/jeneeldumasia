import { useEffect, useState, useCallback } from 'react';
import { useMode } from '@/contexts/ModeContext';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
} from '@/components/ui/command';
import { User, Code, Briefcase, FolderGit2, Award, Mail, Gamepad2, Coffee, Music, Users, Moon } from 'lucide-react';

const workSections = [
  { id: 'hero', label: 'Home', icon: User },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const vibeSections = [
  { id: 'vibe-hero', label: 'Intro', icon: User },
  { id: 'vibe-gaming', label: 'Gaming', icon: Gamepad2 },
  { id: 'vibe-chai', label: 'Chai', icon: Coffee },
  { id: 'vibe-playlist', label: 'Playlist', icon: Music },
  { id: 'vibe-people', label: 'My People', icon: Users },
  { id: 'vibe-2am', label: '2am', icon: Moon },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const { mode } = useMode();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  }, []);

  const sections = mode === 'work' ? workSections : vibeSections;

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Jump to section..." className="font-mono" />
      <CommandList>
        <CommandEmpty className="font-mono text-sm py-6 text-center text-muted-foreground">
          No sections found.
        </CommandEmpty>
        <CommandGroup heading={mode === 'work' ? 'Deploy' : 'Unwind'}>
          {sections.map(section => (
            <CommandItem
              key={section.id}
              value={section.label}
              onSelect={() => scrollTo(section.id)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <section.icon className="h-4 w-4 text-primary" />
              <span className="font-body">{section.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandPalette;
