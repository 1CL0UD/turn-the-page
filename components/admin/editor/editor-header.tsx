import {
  Bold,
  Code,
  Italic,
  ListIcon,
  ListOrdered,
  Redo,
  Strikethrough,
  Undo,
} from 'lucide-react';

import { Editor } from '@tiptap/react';
import { Button } from '@/components/ui/button';

export function EditorHeader({ editor }: { editor: Editor | null }) {
  if (!editor) return null;

  const buttons = [
    {
      value: 'bold',
      icon: <Bold className="size-5" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold'),
    },
    {
      value: 'italic',
      icon: <Italic className="size-5" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive('italic'),
      disabled: !editor.can().chain().focus().toggleItalic().run(),
    },
    {
      value: 'strike',
      icon: <Strikethrough className="size-5" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive('strike'),
      disabled: !editor.can().chain().focus().toggleStrike().run(),
    },
    {
      value: 'code',
      icon: <Code className="size-5" />,
      onClick: () => editor.chain().focus().toggleCode().run(),
      isActive: editor.isActive('code'),
      disabled: !editor.can().chain().focus().toggleCode().run(),
    },
    {
      value: 'bulletList',
      icon: <ListIcon className="size-5" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive('bulletList'),
    },
    {
      value: 'orderedList',
      icon: <ListOrdered className="size-5" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive('orderedList'),
      disabled: !editor.can().chain().focus().toggleOrderedList().run(),
    },
    {
      value: 'undo',
      icon: <Undo className="size-5" />,
      onClick: () => editor.chain().focus().undo().run(),
      isActive: editor.isActive('undo'),
      disabled: !editor.can().chain().focus().undo().run(),
    },
    {
      value: 'redo',
      icon: <Redo className="size-5" />,
      onClick: () => editor.chain().focus().redo().run(),
      isActive: editor.isActive('redo'),
      disabled: !editor.can().chain().focus().redo().run(),
    },
  ];
  return (
    <>
      <div className="">
        {buttons.map(({ value, icon, onClick, isActive, disabled }, index) => (
          <Button
            variant={'ghost'}
            key={index}
            value={value}
            aria-label={`Toggle ${value}`}
            onClick={onClick}
            disabled={disabled}
            className={`p-2 ${
              isActive
                ? 'bg-dark-300 dark:bg-light-200 text-light-200 dark:text-dark-300 rounded-md'
                : ''
            }`}
          >
            {icon}
          </Button>
        ))}
      </div>
    </>
  );
}
