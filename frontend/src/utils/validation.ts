export interface AttributeInfo {
    name: string;
    units?: string;
    range: {
        min: number;
        max: number;
    };
    positiveScale: boolean | null;
}

export interface OptionInfo {
    name: string;
}

export const ERRORS = {
    EXCEED_MAXIMUM:
        'Minimum range cannot be greater than or equal to the maximum range',
    MISSING_ATTRIBUTE_NAME: 'Name of Attribute must not be empty',
    MISSING_OPTION_NAME: 'Name of Attribute must not be empty',
    TOO_LONG_ATTRIBUTE_NAME:
        'Name of Attribute must be no longer than 20 characters',
    TOO_LONG_OPTION_NAME: 'Name of Choice must be no longer than 20 characters',
    TOO_LONG_ATTRIBUTE_UNITS:
        'Attribute Units must be no longer than 20 characters',
    VALID_MIN: 'Minimum range must be a valid number and cannot be empty',
    VALID_MAX: 'Maximum range must be a valid number and cannot be empty',
    NEGATIVE_INPUT: 'The range value cannot be negative',
    DIRECTION_OF_SCALE:
        'Direction of Scale must be either positive or negative',
    NO_ERROR: '',
};

export const validateAttributeInfo = (attributeInfo: AttributeInfo) => {
    if (attributeInfo.name.length < 1) {
        return ERRORS.MISSING_ATTRIBUTE_NAME;
    }

    if (attributeInfo.name.length > 20) {
        return ERRORS.TOO_LONG_ATTRIBUTE_NAME;
    }

    if (attributeInfo.units && attributeInfo.units?.length > 20) {
        return ERRORS.TOO_LONG_ATTRIBUTE_UNITS;
    }

    if (!attributeInfo.range.min && attributeInfo.range.min !== 0) {
        return ERRORS.VALID_MIN;
    }

    if (attributeInfo.range.min >= attributeInfo.range.max) {
        return ERRORS.EXCEED_MAXIMUM;
    }

    if (!attributeInfo.range.max && attributeInfo.range.max !== 0) {
        return ERRORS.VALID_MAX;
    }

    if (attributeInfo.positiveScale === null) {
        return ERRORS.DIRECTION_OF_SCALE;
    }

    return ERRORS.NO_ERROR;
};

export const validateOptionInfo = (optionInfo: OptionInfo) => {
    if (optionInfo.name.length < 1) {
        return ERRORS.MISSING_OPTION_NAME;
    }

    if (optionInfo.name.length > 30) {
        return ERRORS.TOO_LONG_OPTION_NAME;
    }

    return ERRORS.NO_ERROR;
};
