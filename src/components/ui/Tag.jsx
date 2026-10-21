import { cn } from '@/lib/cn';
import { TAG_STYLES } from '@/lib/styles';

const LABEL = { new: 'New', bestseller: 'Bestseller', limited: 'Limited', sale: 'Sale' };

export function Tag({ kind }) {
  return <span className={cn('inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium', TAG_STYLES[kind])}>{LABEL[kind]}</span>;
}
