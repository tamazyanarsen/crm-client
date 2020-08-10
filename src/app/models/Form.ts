export interface FormField {
  name?: string;
  formControlName?: string;
  type?: string;
  placeholder?: string;
  formGroupName?: string;
  fields?: FormField[];
  data?: any[];
  onChangeFunc?: any;
}
