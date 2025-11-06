export interface RadioButtonProps {
  name: string;
  options: string[];
  selectedValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
