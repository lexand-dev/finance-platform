"use client";

import { useMemo } from "react";
import { SingleValue } from "react-select";
import CreateableSelect from "react-select/creatable";

type Props = {
  onChange: (value: string) => void;
  onCreate?: (name: string) => void;
  options?: { label: string; value: string }[];
  value?: string | null | undefined;
  disabled?: boolean;
  placeholder?: string;
};

export const Select = ({
  onChange,
  onCreate,
  options = [],
  value,
  disabled,
  placeholder,
}: Props) => {
  const onSelect = (option: SingleValue<{ label: string; value: string }>) => {
    onChange(option?.value || "");
  };

  const selectedOption = useMemo(() => {
    if (value) {
      return { label: value, value };
    }
    return null;
  }, [value]);

  return (
    <CreateableSelect
      isDisabled={disabled}
      placeholder={placeholder}
      value={selectedOption}
      onChange={onSelect}
      onCreateOption={onCreate}
      options={options}
    />
  );
};
