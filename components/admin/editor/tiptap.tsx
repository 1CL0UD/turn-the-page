'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { EditorHeader } from './editor-header';
import Heading from '@tiptap/extension-heading';
import { Separator } from '@/components/ui/separator';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Heading],
    content: '<p>Hello World! 🌎️</p>',
    immediatelyRender: false,
  });

  return (
    <div className="flex flex-col border-2 border-dark-300 dark:border-light-200 bg-light-200 dark:bg-dark-300 rounded-lg shadow-md">
      <EditorHeader editor={editor} />
      <Separator className="bg-dark-300 dark:bg-light-200" />
      <EditorContent editor={editor} className="p-2" />
    </div>
  );
};

export default Tiptap;
