'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { EditorHeader } from './editor-header';
import { Separator } from '@/components/ui/separator';

const Tiptap = ({
  description,
  onChange,
}: {
  description: string;
  onChange: (richText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
    content: description,
    editorProps: {
      attributes: {
        class:
          'rounded-md border min-h-[150px] border-input focus:ring-offset-2 disabled:cursor-not-allows disabled:opacity-50 p-2',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
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
