export interface DropdownProps {
  options: string[];
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
