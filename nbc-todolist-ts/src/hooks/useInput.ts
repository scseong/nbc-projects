import { useCallback, useState } from 'react';

export default function useInput(initialState: string) {
  const [value, setValue] = useState<string>(initialState);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  return [value, onChange, setValue] as const;
}
