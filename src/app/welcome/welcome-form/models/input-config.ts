import { FormStatus } from './form-status-config';
import { LabelConfig } from './label-config';

export interface InputConfig {
    inputLabel?: LabelConfig;
    placeholder?: string;
    inputName?: string;
    type?: string;
    size?: number;
    min?: number;
    max?: number;
    disabled?: boolean;
    inputClasses?: string;
    // Text types.
    clearable?: boolean;
    clearOnEdit?: boolean;
    // General properties.
    maxLength?: number;
    minLength?: number;
    autoComplete?: boolean;
    autoCorrect?: boolean;
    autoCapitalize?: string;
    inputMode?: string;
    step?: number;
    formStatus?: FormStatus;
}
