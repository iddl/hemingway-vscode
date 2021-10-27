import type {Plugin} from 'unified';
import type {Root} from 'nlcst';

export default function longSentences(): Plugin<void[], Root, string> {
  return (tree: any, file: any) => {
    console.log(tree);
    return;
  };
}
