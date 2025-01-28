import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Post {
  id: string;
  title: string;
  novel: string;
  content: string;
}

interface PostPopupProps {
  post: Post;
}

export function PostPopup({ post }: PostPopupProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{post.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <h4 className="font-medium">Novel</h4>
            <p>{post.novel}</p>
          </div>
          <div>
            <h4 className="font-medium">Content Preview</h4>
            <p className="line-clamp-3">{post.content}</p>
          </div>
        </div>
        <Button>Edit Chapter</Button>
      </DialogContent>
    </Dialog>
  );
}
